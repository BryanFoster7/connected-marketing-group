import React, { useEffect, useRef, useState } from 'react';

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState({
    snake: [{ x: 10, y: 10 }],
    food: { x: 15, y: 15 },
    direction: 'RIGHT',
    speed: 100,
    gridSize: 20,
    score: 0,
    isGameOver: false,
  });

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const gridSize = gameState.gridSize;

    // Clear canvas
    ctx.fillStyle = '#1C1C1E'; // dark background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid lines
    ctx.strokeStyle = '#2C2C2E'; // dark-lighter
    ctx.lineWidth = 1;
    for (let i = 0; i <= canvas.width; i += gridSize) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    for (let i = 0; i <= canvas.height; i += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    // Draw snake with gradient
    gameState.snake.forEach((segment, index) => {
      const gradient = ctx.createLinearGradient(
        segment.x * gridSize,
        segment.y * gridSize,
        (segment.x + 1) * gridSize,
        (segment.y + 1) * gridSize
      );
      gradient.addColorStop(0, '#22D3EE'); // primary
      gradient.addColorStop(1, '#67E8F9'); // primary-light
      ctx.fillStyle = gradient;
      ctx.fillRect(
        segment.x * gridSize,
        segment.y * gridSize,
        gridSize - 2,
        gridSize - 2
      );
    });

    // Draw food with glow effect
    ctx.shadowColor = '#F472B6'; // secondary
    ctx.shadowBlur = 15;
    ctx.fillStyle = '#EC4899'; // secondary-dark
    ctx.fillRect(
      gameState.food.x * gridSize,
      gameState.food.y * gridSize,
      gridSize - 2,
      gridSize - 2
    );
    ctx.shadowBlur = 0;
  }, [gameState]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isPlaying) return;
      
      // Prevent default browser scrolling for arrow keys
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }
      
      switch (e.key) {
        case 'ArrowUp':
          if (gameState.direction !== 'DOWN')
            setGameState(prev => ({ ...prev, direction: 'UP' }));
          break;
        case 'ArrowDown':
          if (gameState.direction !== 'UP')
            setGameState(prev => ({ ...prev, direction: 'DOWN' }));
          break;
        case 'ArrowLeft':
          if (gameState.direction !== 'RIGHT')
            setGameState(prev => ({ ...prev, direction: 'LEFT' }));
          break;
        case 'ArrowRight':
          if (gameState.direction !== 'LEFT')
            setGameState(prev => ({ ...prev, direction: 'RIGHT' }));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, gameState.direction]);

  useEffect(() => {
    if (!isPlaying) return;

    const moveSnake = () => {
      const head = { ...gameState.snake[0] };
      
      switch (gameState.direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
      }

      // Check collision with walls
      if (
        head.x < 0 ||
        head.x >= canvas.width / gameState.gridSize ||
        head.y < 0 ||
        head.y >= canvas.height / gameState.gridSize
      ) {
        setIsPlaying(false);
        setGameState(prev => ({ ...prev, isGameOver: true }));
        return;
      }

      // Check collision with self
      if (gameState.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setIsPlaying(false);
        setGameState(prev => ({ ...prev, isGameOver: true }));
        return;
      }

      const newSnake = [head, ...gameState.snake];

      // Check if food is eaten
      if (head.x === gameState.food.x && head.y === gameState.food.y) {
        // Generate new food position
        const newFood = {
          x: Math.floor(Math.random() * (canvas.width / gameState.gridSize)),
          y: Math.floor(Math.random() * (canvas.height / gameState.gridSize)),
        };
        setGameState(prev => ({
          ...prev,
          food: newFood,
          score: prev.score + 1,
          snake: newSnake,
        }));
      } else {
        newSnake.pop();
        setGameState(prev => ({ ...prev, snake: newSnake }));
      }
    };

    const gameLoop = setInterval(moveSnake, gameState.speed);
    return () => clearInterval(gameLoop);
  }, [isPlaying, gameState]);

  const startGame = () => {
    setGameState({
      snake: [{ x: 10, y: 10 }],
      food: { x: 15, y: 15 },
      direction: 'RIGHT',
      speed: 100,
      gridSize: 20,
      score: 0,
      isGameOver: false,
    });
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-dark-lighter rounded-lg shadow-glow border border-dark-lightest">
      <div className="text-2xl font-bold heading-gradient">
        Score: {gameState.score}
      </div>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="border-2 border-primary/30 rounded bg-dark"
      />
      {!isPlaying && (
        <button
          onClick={startGame}
          className="btn-primary"
        >
          {gameState.isGameOver ? 'Play Again' : 'Start Game'}
        </button>
      )}
      <div className="text-sm text-light/70 mt-2">
        Use arrow keys to control the snake
      </div>
    </div>
  );
};

export default SnakeGame;
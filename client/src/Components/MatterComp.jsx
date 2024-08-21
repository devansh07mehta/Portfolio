import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import MatterWrap from "matter-wrap";
import MatterAttractors from "matter-attractors";

const MatterComp = ({ isChecked }) => {
  const [animationReady, setAnimationReady] = useState(false);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);

  useEffect(() => {
    Matter.use(MatterAttractors);
    Matter.use(MatterWrap);

    const {
      Engine,
      Events,
      Runner,
      Render,
      World,
      Body,
      Mouse,
      Common,
      Bodies,
    } = Matter;

    const engine = Engine.create();
    engineRef.current = engine;

    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    const render = Render.create({
      element: containerRef.current,
      canvas: canvasRef.current,
      engine: engine,
      options: {
        showVelocity: false,
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });
    renderRef.current = render;

    const runner = Runner.create();
    runnerRef.current = runner;

    // Determine particle color based on isChecked
    const particleColor = isChecked ? "#222222" : "#E2E8F0";

    const attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      Math.max(render.options.width / 25, render.options.height / 25) / 2,
      {
        render: {
          fillStyle: isChecked ? "#000" : "#A0AEC0", // Slightly darker for visibility
          strokeStyle: "#000",
          lineWidth: 0,
        },
        isStatic: true,
        plugin: {
          attractors: [
            (bodyA, bodyB) => ({
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            }),
          ],
        },
      }
    );

    World.add(engine.world, attractiveBody);

    // Add bodies
    for (let i = 0; i < 60; i++) {
      const x = Common.random(0, render.options.width);
      const y = Common.random(0, render.options.height);
      const s =
        Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      const polygonNumber = Common.random(3, 6);

      const body = Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: particleColor,
          strokeStyle: isChecked ? "#000000" : "#A0AEC0",
          lineWidth: 2,
        },
      });

      World.add(engine.world, body);

      const r = Common.random(0, 1);
      const circles = [
        Bodies.circle(x, y, Common.random(2, 8), {
          mass: 0.1,
          friction: 0,
          frictionAir: 0.01,
          render: {
            fillStyle:
              r > 0.3
                ? isChecked
                  ? "#27292d"
                  : "#CBD5E1"
                : isChecked
                ? "#444444"
                : "#A0AEC0",
            strokeStyle: isChecked ? "#000000" : "#A0AEC0",
            lineWidth: 2,
          },
        }),
        Bodies.circle(x, y, Common.random(2, 20), {
          mass: 6,
          friction: 0,
          frictionAir: 0,
          render: {
            fillStyle:
              r > 0.3
                ? isChecked
                  ? "#334443"
                  : "#A0AEC0"
                : isChecked
                ? "#222222"
                : "#718096",
            strokeStyle: isChecked ? "#111111" : "#718096",
            lineWidth: 4,
          },
        }),
        Bodies.circle(x, y, Common.random(2, 30), {
          mass: 0.2,
          friction: 0.6,
          frictionAir: 0.8,
          render: {
            fillStyle: isChecked ? "#191919" : "#CBD5E1",
            strokeStyle: isChecked ? "#111111" : "#A0AEC0",
            lineWidth: 3,
          },
        }),
      ];

      World.add(engine.world, circles);
    }

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    render.mouse = mouse;

    Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x || !mouse.position.y) return;

      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    Runner.run(runner, engine);
    Render.run(render);

    // Signal that animation is ready
    setAnimationReady(true);

    // Cleanup function
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, [isChecked]); // Re-run the effect when isChecked changes

  useEffect(() => {
    const handleResize = () => {
      if (renderRef.current && renderRef.current.canvas) {
        renderRef.current.canvas.width = window.innerWidth;
        renderRef.current.canvas.height = window.innerHeight;
        renderRef.current.options.width = window.innerWidth;
        renderRef.current.options.height = window.innerHeight;
        Matter.Render.setPixelRatio(renderRef.current, window.devicePixelRatio);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
      className="hidden sm:flex"
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      {animationReady && (
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          {/* Your content goes here */}
        </div>
      )}
    </div>
  );
};

export default MatterComp;

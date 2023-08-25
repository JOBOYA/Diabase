import { useEffect, useState } from 'react';

export const Mouse = () => {
    const [, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
    const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number }>>([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
          setPosition({ x: event.clientX, y: event.clientY });
    
          // Check if the mouse is over the navbar
          const navbarElement = document.getElementById('navbar');
          const isOverNavbar = navbarElement 
            && event.clientX >= navbarElement.getBoundingClientRect().left 
            && event.clientX <= navbarElement.getBoundingClientRect().right 
            && event.clientY >= navbarElement.getBoundingClientRect().top
            && event.clientY <= navbarElement.getBoundingClientRect().bottom;
    
          // Add effect only for desktop screens and not over the navbar
          if (!isMobile && !isOverNavbar) {
            setParticles(particles => [...particles, { id: Date.now(), x: event.clientX, y: event.clientY }]);
          }
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isMobile]); 

    useEffect(() => {
        const interval = setInterval(() => {
          setParticles(particles => particles.filter(particle => Date.now() - particle.id < 1000));  // Remove particles older than 1 second
        }, 500);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    

      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      return (
        <>
          {particles.map((particle) => (
            <div key={particle.id} style={{
              position: 'fixed',
              top: particle.y,
              left: particle.x,
              width: '30px',
              height: '30px',
              background: 'rgba(0, 128, 128, 0.3)',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              backdropFilter: 'blur(10px)',
              animation: 'fade-out 1s forwards'  // Add this line
            }} />
          ))}
          </>
      )
    }
    
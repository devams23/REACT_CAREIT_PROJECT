import React, { useState, useEffect } from 'react';

const ExerciseBreak = ({ durationInSeconds, onBreakEnd }) => {
    const [secondsRemaining, setSecondsRemaining] = useState(durationInSeconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecondsRemaining((prevSeconds) => {
                if (prevSeconds === 0) {
                    clearInterval(intervalId);
                    if (onBreakEnd) {
                        onBreakEnd();
                    }
                    return 0; // Ensure secondsRemaining never goes negative
                } else {
                    return prevSeconds - 1;
                }
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [onBreakEnd]);

    return (
        <div>
            <p>Break Time</p>
            <p>{secondsRemaining} s</p>
        </div>
    );
};

export default ExerciseBreak;

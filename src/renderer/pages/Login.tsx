import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const sendNotification = () =>
    new Notification('Test', {
        body: 'You are not logged in'
    });

export const Login: FC = () => {
    const [isLogged, setIsLogged] = useState(true);

    useEffect(() => {
        if (!isLogged) {
            sendNotification();
        }
    }, [isLogged]);

    return <Container>Sign in</Container>;
};

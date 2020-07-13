import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader';

const AppWrapper: React.FC = ({ children }) => {
    const asyncTasks = useSelector(
        (state: RootState) => state.applicationReducer.asyncTasks,
    );
    return (
        <>
            {children}
            {asyncTasks.length > 0 && <Loader />}
        </>
    );
};

export { AppWrapper };

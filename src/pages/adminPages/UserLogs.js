import React from 'react'
import LogsTableUI from '../../components/UI/logTableUI/LogsTableUI'
import {  useSelector } from "react-redux";

const UserLogs = () => {
    const { user } = useSelector((state) => state.auth);
    const { logs } = useSelector((state) => state.logs);
    return (
        <>
        {
            user && logs&& (<LogsTableUI workingHours={user.user.working_hours} logs={logs} />)
        }
        </>
        
    )
}

export default UserLogs

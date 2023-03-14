import React from 'react'
import { Card, Col, Row } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons';
import Navbar from './Components/Navbar';
import EventTable from './Components/EventTable';
import { Button, Modal } from 'antd';
import { useState } from 'react';

export default function Event() {
    const iconSize = "large"
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <div className=' justify-center'>
                </div>
                <EventTable />
                
            </div>
        </div>

    )
}

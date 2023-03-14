import React from "react";
import { Table} from "antd";
import {BulbOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { useState } from 'react';
import Eventcolumn from './Eventcolumn';
import SimpleData from "./SimpleData";
import SimpleForm from './Form'
import Form2 from "./Form2";

export default function EventTable() {
    

    const Data = SimpleData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEventOpen, setIsEventOpen] = useState(false);
    const [selectedTokenIndex, setSelectedTokenIndex] = useState(0);
    const [selecteddetailIndex, setSelectedDetailIndex] = useState(0);
    const indexValue = Data.map((index) => index.twotime);
    const Detail =[
        {
            key: '1',
            title: 'รหัสกิจกรรม',
            detail: Data[selecteddetailIndex].EventKey,
          },
          {
            key: '2',
            title: 'ชื่อกิจกรรม',
            detail: Data[selecteddetailIndex].EventName,
          },
          {
            key: '3',
            title: 'ระดับกิจกรรม',
            detail: Data[selecteddetailIndex].EventRank,
          },
          {
            key: '4',
            title: 'สถานะกิจกรรม',
            detail: Data[selecteddetailIndex].status,
          },
          {
            key: '5',
            title: 'ระดับการศึกษา',
            detail: Data[selecteddetailIndex].Edurank,
          },
          {
            key: '6',
            title: 'ชั่วโมง',
            detail: Data[selecteddetailIndex].HourCount,
          },
          {
            key: '7',
            title: 'จำนวนที่เปิดรับ',
            detail: Data[selecteddetailIndex].Bodycount,
          },
          {
            key: '8',
            title: 'วันที่เริ่มกิจกรรม',
            detail: Data[selecteddetailIndex].begin,
          },
          {
            key: '9',
            title: 'วันที่สิ้นสุดกิจกรรม',
            detail: Data[selecteddetailIndex].end,
          },
          {
            key: '10',
            title: 'สถานที่จัดกิจกรรม',
            detail: Data[selecteddetailIndex].place,
          },

    ]
    const Detailcolumn = [
        {
            title: "",
            dataIndex: "title",
            key: "title",
            responsive: ['xs', 'sm', 'xl'],
            render: (text) =>
                <th>{text}</th>

            ,
        },
        {
            title: "",
            dataIndex: "detail",
            key: "detail",
            responsive: ['xs', 'sm', 'xl'],
        }
    ];
    //Info modal
    const tokenShow = (index) => () => {
        setSelectedTokenIndex(index);
        setIsModalOpen(true);
    };

    const tokenOk = () => {
        setIsModalOpen(false);
    };

    const tokenCancel = () => {
        setIsModalOpen(false);
    };
    // Event modal
    const eventShow = (index) =>() => {
        setSelectedDetailIndex(index)
        setIsEventOpen(true);
    };

    const eventOk = () => {
        setIsEventOpen(false);
    };

    const eventCancel = () => {
        setIsEventOpen(false);
    };

    return (
        <div>
            <Eventcolumn tokenOk={tokenOk} tokenShow={tokenShow} eventShow={eventShow}/>
            <Modal
                title={[<BulbOutlined />, ' กรอกโทเคนคีย์ให้ถูกต้อง']}
                open={isModalOpen}
                onCancel={tokenCancel}
                footer={[
                    <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={tokenCancel}>
                        Cancel
                    </button>,
                ]}>

                {indexValue[selectedTokenIndex] ? <SimpleForm /> : <Form2 />}
            </Modal>
            <Modal
                title={[<BulbOutlined />, 'ข้อมูลกิจกรรม']}
                open={isEventOpen} onCancel={eventCancel}
                footer={[
                    <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={eventCancel}>
                        Cancel
                    </button>,
                ]}>
                    <Table columns={Detailcolumn} dataSource={Detail}/>
            </Modal>
        </div>
    );
}

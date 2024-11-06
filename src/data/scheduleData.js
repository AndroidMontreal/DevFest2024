// scheduleData.js
import { speakers2024 } from './speakers2024Data';
import { sessions2024Data } from './sessions2024Data';

export const scheduleData =
{
  date: '2024-11-09',
  dateReadable: 'November 9',
  rooms: [
    { uuid: 'f9ed81db-f90a-42d4-b7e4-d554d8f338fd', name: 'Room 1' },
    { uuid: '03daa4f4-7d63-42dd-b133-9194f298e194', name: 'Room 2' },
    { uuid: '1b974777-55d4-4741-8fff-920d5a292385', name: 'Room 3' },
    { uuid: 'cba79f3f-3e12-4f15-bb42-e17652efae58', name: '' },
  ],
  timeSlots: [
    {
      startTime: '08:30',
      endTime: '09:30',
      sessions: [
        { roomUUID: 'cba79f3f-3e12-4f15-bb42-e17652efae58', sessionUUID: '246a17da-adf9-4d8e-9c50-ef84bdf68c55' },
      ],
      commonAllRooms: true,
      icon: 'FaRegIdBadge',
    }, {
      startTime: '09:30',
      endTime: '10:00',
      sessions: [
        { roomUUID: 'cba79f3f-3e12-4f15-bb42-e17652efae58', sessionUUID: '4d0cb762-4de4-43cf-b4ea-f02bcfa5b559' },
      ],
      commonAllRooms: true,
      icon: 'TbNotes',
    }, {
      startTime: '10:00',
      endTime: '10:45',
      sessions: [
        { roomUUID: 'f9ed81db-f90a-42d4-b7e4-d554d8f338fd', sessionUUID: '08c71152-c552-42e7-b094-f510ff44e9d0' },
        { roomUUID: '03daa4f4-7d63-42dd-b133-9194f298e194', sessionUUID: '5108babc-bf35-44d5-a9ba-de08badfa80a' },
        { roomUUID: '1b974777-55d4-4741-8fff-920d5a292385', sessionUUID: '08c71152-c552-42e7-b094-f510ff44e9cb' },
      ],
    }, {
      startTime: '10:45',
      endTime: '11:00',
      sessions: [
        { roomUUID: 'cba79f3f-3e12-4f15-bb42-e17652efae58', sessionUUID: '27ff7729-5792-4efd-a813-321fd6523e63' },
      ],
      commonAllRooms: true,
      icon: 'MdOutlineFastfood',
    },
    {
      startTime: '11:00',
      endTime: '11:45',
      sessions: [
        { roomUUID: 'f9ed81db-f90a-42d4-b7e4-d554d8f338fd', sessionUUID: '08c71152-c552-42e7-b094-f510ff44e9cc' },
        { roomUUID: '03daa4f4-7d63-42dd-b133-9194f298e194', sessionUUID: 'a47442e6-ff57-43ca-af40-7e2b4d46f93d' },
        { roomUUID: '1b974777-55d4-4741-8fff-920d5a292385', sessionUUID: '789c0123-d456-f789-0123-456789abcdef' },
      ],
    }, {
      startTime: '11:45',
      endTime: '14:00',
      sessions: [
        { roomUUID: 'cba79f3f-3e12-4f15-bb42-e17652efae58', sessionUUID: '81debd8b-7e40-493f-8abe-6650ed08a289' },
      ],
      commonAllRooms: true,
      icon: 'MdOutlineFastfood',
    },
    {
      startTime: '14:00',
      endTime: '14:45',
      sessions: [
        { roomUUID: 'f9ed81db-f90a-42d4-b7e4-d554d8f338fd', sessionUUID: '08c71152-c552-42e7-b094-f510ff44e9ce' },
        { roomUUID: '03daa4f4-7d63-42dd-b133-9194f298e194', sessionUUID: '08c71152-c552-42e7-b094-f510ff44e9cd' },
        { roomUUID: '1b974777-55d4-4741-8fff-920d5a292385', sessionUUID: '08c71152-c552-42e7-b094-f510ff44e9d2' },
      ],
    },
    {
      startTime: '14:45',
      endTime: '15:00',
      sessions: [
        { roomUUID: 'cba79f3f-3e12-4f15-bb42-e17652efae58', sessionUUID: '004d6b2c-7803-4170-a41c-8ddd1d1c2ded' },
      ],
      commonAllRooms: true,
      icon: 'PiCoffee',
    },
    {
      startTime: '15:00',
      endTime: '15:45',
      sessions: [
        { roomUUID: 'f9ed81db-f90a-42d4-b7e4-d554d8f338fd', sessionUUID: '08c71152-c552-42e7-b094-f510ff44e9d1' },
        { roomUUID: '03daa4f4-7d63-42dd-b133-9194f298e194', sessionUUID: '08c71152-c552-42e7-b094-f510ff44e9d3' },
        { roomUUID: '1b974777-55d4-4741-8fff-920d5a292385', sessionUUID: '08c71152-c552-42e7-b094-f510ff44e9d6' },
      ],
    },
    {
      startTime: '15:45',
      endTime: '16:00',
      sessions: [
        { roomUUID: 'cba79f3f-3e12-4f15-bb42-e17652efae58', sessionUUID: '55cf2089-c5f9-49d7-a8a0-6a17c16ed4bf' },
      ],
      commonAllRooms: true,
      icon: 'PiCoffee',
    },
    {
      startTime: '16:00',
      endTime: '16:45',
      sessions: [
        { roomUUID: 'f9ed81db-f90a-42d4-b7e4-d554d8f338fd', sessionUUID: '08c71152-c552-42e7-b094-f510ff44e9d4' },
        { roomUUID: '03daa4f4-7d63-42dd-b133-9194f298e194', sessionUUID: '08c71152-c552-42e7-b094-f510ff44e9d5' },
        { roomUUID: '1b974777-55d4-4741-8fff-920d5a292385', sessionUUID: '08c71152-c552-42e7-b094-f510ff44e9d7' },
      ],
    },
    {
      startTime: '17:00',
      endTime: '17:30',
      sessions: [
        { roomUUID: 'cba79f3f-3e12-4f15-bb42-e17652efae58', sessionUUID: '9ac5195c-b7c1-4e53-8f64-ceba480a6dc4' },
      ],
      commonAllRooms: true,
      icon: 'TbNotes',

    },
  ],
};


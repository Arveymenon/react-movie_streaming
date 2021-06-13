import React, { useState } from 'react';
import { useAppDispatch, useAppSelector} from './../../hooks/store'

import { increment, decrement } from './counterSlice'

export function Counter(){
    const count = useAppSelector((state)=>state.counter.value);
    const dispatch = useAppDispatch()
}
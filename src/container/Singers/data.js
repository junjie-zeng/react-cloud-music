import React, { createContext, useReducer } from 'react'
import { fromJS } from 'immutable'

export const CategoryDataContext = createContext({

})

// action-type
export const CHANGE_CATEGORY = 'singers/CHANGE_CATEGORY'; // 分类
export const CHANGE_ALPHA = 'singers/CHANGE_ALPHA'; // 字母

// reducer 纯函数
const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return state.set('category', action.data)
        case CHANGE_ALPHA:
            return state.set('alpha', action.data)
        default:
            return state
    }
}

// Provider 组件
export const Data = (props) => {
    // useReducer 的第二个参数中传入初始值
    const [data,dispatch] = useReducer(reducer,fromJS({
        category:'',
        alpha:''
    }))

    return(
        <CategoryDataContext.Provider value = {{data,dispatch}}>
            {props.children}
        </CategoryDataContext.Provider>
    )
}
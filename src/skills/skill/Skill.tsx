import React from 'react';
import style from './Skill.module.css'

type skillPropsType = {
    title: string
    description: string
}

const Skill = (props: skillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h5>{props.title}</h5>
            <span  className={style.description}>{props.description}</span>
        </div>
    );
}

export default Skill;
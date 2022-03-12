import React from 'react';

import { connect } from 'react-redux';

import * as CourseActions from '../../store/actions/course';

const Sidebar = ({ modules, dispatch }) => {
    return (
        <aside>
                {modules.map(module => (
                    <div key={module.id}>
                        <strong>{module.title}</strong>
                        <ul>
                            {module.lessons.map(lesson => (
                                <li key={lesson.id} style={{display: "flex", flexDirection: 'row', margin: "3px"}}>
                                    <div style={{margin: "3px"}} >{lesson.title}</div>
                                    <button onClick={() => dispatch(CourseActions.toggleLesson(module, lesson))}>Selecionar</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </aside>
    );
}

const mapStateToProps = state => ({
    modules: state.course.modules
});
 
export default connect(state => (mapStateToProps))(Sidebar);
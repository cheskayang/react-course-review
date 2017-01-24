import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseFrom from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      course: Object.assign({}, this.props.initialCourse),
      errors: {}
    }
  }

  render() {
    return (
      <CourseFrom
        allAuthors={[]}
        course={this.state.course}
        errors={this.state.errors}/>
    )
  }
}




ManageCoursePage.propTypes = {
  initialCourse: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  return {
    initialCourse: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
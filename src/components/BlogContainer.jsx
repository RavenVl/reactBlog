import {connect} from 'react-redux';
import Blog from './Blog';
const mapStateToProps = state =>
    ({
        data:state
    });
const BlogContainer = connect(mapStateToProps)(Blog);
export default BlogContainer;
import React from 'react';

function Blog(props) {
    return (<div className="content">
        {
            props.data.map((blog, i) => {
                return (
                    <div className="demo-content" key={i}>
                        <div className="content-picture"><img src={blog.picture} alt="qee"/></div>
                        <div className="content-body">
                            <h3>{blog.title}</h3>
                            <h4>{blog.subtitle}</h4>
                            <div>
                                {blog.content}
                            </div>
                            <div>
                                {
                                    blog.images.map((img, key) =>
                                        <img src={img} height="100" alt="qee" key={key}/>
                                    )
                                }
                            </div>
                            <div>{blog.location}</div>
                        </div>

                    </div>
                )
            })
        }
    </div>)
}


export default Blog;
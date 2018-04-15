import React from 'react';
class Blog extends React.Component{
    render(){
        return (
            <div className="demo-content">
                <div className="content-picture"><img src="img/slice-2.png" alt="qee" /></div>
                <div className="content-body">
                    <h3>1 title</h3>
                    <h4>1 subtitle</h4>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores, corporis culpa cumque
                        delectus dolor enim eum hic maiores nam necessitatibus, officiis optio quae quis repudiandae
                        temporibus ut, velit vitae.
                    </div>
                    <div>
                        <img src="http://krasimtachky.ru/wp-content/uploads/2015/01/eskiz-aerografii.jpg" height="100"  alt="qee" />
                        <img src="http://krasimtachky.ru/wp-content/uploads/2015/01/eskiz-aerografii2.jpg" height="100"  alt="qee" />
                    </div>
                    <div>Kentuki, USA</div>
                </div>

            </div>
        )
    }
}
export default Blog;
import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Posts extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {
    return (

      <section id="posts">
        <div className="update-container">
          <div className="author-info">
            <a href="#" className="user-img"/>
            <div className="info">
              <a href="#">James Doe</a>shared a<a href="#">story</a>
            </div>
          </div>
          <div className="media">
            <div className="image" style={{
                background: 'url("http://www.lovethispic.com/uploaded_images/192648-Be-Your-Own-Inspiration.png")',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}/>
          </div>
          <div className="padding-container">
            <div className="grey-container">
              <div className="update-info">
                <h3>How to become a developer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="update-stats">
                <div className="icon-section">
                  <div className="like-circle"><i className="fas fa-thumbs-up"/></div>
                </div>
                <div className="other-users">Sarah Rssel and 23 others liked update</div>
                <div className="comments-stats">4 Comments</div>
              </div>
              <div className="compose-comment">
                <textarea name="name" rows={8} cols={80} defaultValue={""}/>
                <div className="buttons">
                  <div className="repost-btn"><i className="fas fa-redo"/></div>
                  <div className="like-btn"><i className="fas fa-thumbs-up"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="update-container">
          <div className="author-info">
            <a href="#" className="user-img"/>
            <div className="info">
              <a href="#">James Doe</a>shared a<a href="#">story</a>
            </div>
          </div>
          <div className="media">
            <div className="image" style={{
                background: 'url("http://www.lovethispic.com/uploaded_images/192648-Be-Your-Own-Inspiration.png")',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}/>
          </div>
          <div className="padding-container">
            <div className="grey-container">
              <div className="update-info">
                <h3>How to become a developer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="update-stats">
                <div className="icon-section">
                  <div className="like-circle"><i className="fas fa-thumbs-up"/></div>
                </div>
                <div className="other-users">Sarah Rssel and 23 others liked update</div>
                <div className="comments-stats">4 Comments</div>
              </div>
              <div className="compose-comment">
                <textarea name="name" rows={8} cols={80} defaultValue={""}/>
                <div className="buttons">
                  <div className="repost-btn"><i className="fas fa-redo"/></div>
                  <div className="like-btn"><i className="fas fa-thumbs-up"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="update-container">
          <div className="author-info">
            <a href="#" className="user-img"/>
            <div className="info">
              <a href="#">James Doe</a>shared a<a href="#">story</a>
            </div>
          </div>
          <div className="media">
            <div className="image" style={{
                background: 'url("http://www.lovethispic.com/uploaded_images/192648-Be-Your-Own-Inspiration.png")',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}/>
          </div>
          <div className="padding-container">
            <div className="grey-container">
              <div className="update-info">
                <h3>How to become a developer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="update-stats">
                <div className="icon-section">
                  <div className="like-circle"><i className="fas fa-thumbs-up"/></div>
                </div>
                <div className="other-users">Sarah Rssel and 23 others liked update</div>
                <div className="comments-stats">4 Comments</div>
              </div>
              <div className="compose-comment">
                <textarea name="name" rows={8} cols={80} defaultValue={""}/>
                <div className="buttons">
                  <div className="repost-btn"><i className="fas fa-redo"/></div>
                  <div className="like-btn"><i className="fas fa-thumbs-up"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    )
  }
}

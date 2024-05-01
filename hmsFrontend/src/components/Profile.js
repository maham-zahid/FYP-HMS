import React from 'react';

export default function ProfilePage() {
      return (
        <div>
          <meta charSet="utf-8" />
          <title>profile edit data and skills - Bootdey.com</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" rel="stylesheet" />
          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    \tbody{\n    background: #f7f7ff;\n    margin-top:20px;\n}\n.card {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 0 solid transparent;\n    border-radius: .25rem;\n    margin-bottom: 1.5rem;\n    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%);\n}\n.me-2 {\n    margin-right: .5rem!important;\n}\n    " }} />
          <div className="container">
            <div className="main-body">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img src="b.jpeg" alt="Admin" className="rounded-circle p-1 bg-primary" width={110} />
                        <div className="mt-3">
                          <h4>Ali Ahmed</h4>
                          <p className="text-secondary mb-1">Web Developer</p>
                          <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                          <div>
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                            {/* <button className="btn btn-primary">Edit</button> */}
                          </div>
                        </div>
                      </div>
                      <hr className="my-4" />
                
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-8">
                  <div className="card">
                    <div className="card-body">
                      <div>
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" id="password" data-toggle="tab" href="#password" role="tab">Password</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                      </div>
                      
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" defaultValue="Ali Ahmed" />
                        </div>
                      </div>
                    
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" defaultValue="ali@gmail.com" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Phone</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" defaultValue="(+92) 333-3862-696" />
                        </div>
                      </div>
                      
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" defaultValue="Bay Area, San Francisco, CA" />
                        </div>
                      </div>

                      <h3>Change Password</h3><br/>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Current Password</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input
                            type="password"
                            onblur="this.value=!this.value?'Password':this.value;"
                            onfocus="this.select()"
                            onclick="if (this.value=='Password'){this.value='';}"
                            name="pwd"
                            id="user_pass"
                            class="input"
                            value="Password"
                            size="20"
                            tabindex="20" />
                          </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">New Password</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input
                            type="password"
                            onblur="this.value=!this.value?'Password':this.value;"
                            onfocus="this.select()"
                            onclick="if (this.value=='Password'){this.value='';}"
                            name="pwd"
                            id="user_pass"
                            class="input"
                            value="Password"
                            size="20"
                            tabindex="20" />
                          </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Confirm Password</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        <input
                            type="password"
                            onblur="this.value=!this.value?'Password':this.value;"
                            onfocus="this.select()"
                            onclick="if (this.value=='Password'){this.value='';}"
                            name="pwd"
                            id="user_pass"
                            class="input"
                            value="Password"
                            size="20"
                            tabindex="20" />
                          </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3" />
                        <div className="col-sm-9 text-secondary">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Cancel"/>
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Save"/>
                          {/* <input type="button" className="btn btn-primary px-4" defaultValue="Save Changes" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  
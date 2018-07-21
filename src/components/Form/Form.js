import React, { Component } from 'react'
import uuidv4 from 'uuid/v4';
class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      level: 1
    }
  }

  submitForm = event => {
    event.preventDefault()
    event.target.reset();
    const {username, password, level} = this.state
    const item = {
      id: uuidv4(),
      username,
      password,
      level: parseInt(level, 10)
    }
    this.props.addUser(item)
  }
  changeInput = event => {
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="alert alert-danger" role="alert">
          <strong>Lỗi </strong> Vui lòng nhập
        </div>
        <div className="alert alert-success" role="alert">
          <strong>Thông báo </strong> Thành công
        </div>
        <div className="card">
          <div className="card-header">
            Thêm
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={e => this.props.formToogle(false, e)}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="card-block">
            <form method="POST" onSubmit={e => this.submitForm(e)}>
              <div className="form-group">
                <label htmlFor="txtUser">Thành Viên</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập Thành Viên"
                  name="username"
                  onChange={e => this.changeInput(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="txtPass">Mật Khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nhập Mật Khẩu"
                  name="password"
                  onChange={e => this.changeInput(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sltLevel">Quyền</label>
                <select
                  className="form-control"
                  name="level"
                  onChange={e => this.changeInput(e)}
                  defaultValue={this.state.level}
                >
                  <option value={1}>Quản Trị Viên</option>
                  <option value={2}>Thành Viên</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Thêm
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Form

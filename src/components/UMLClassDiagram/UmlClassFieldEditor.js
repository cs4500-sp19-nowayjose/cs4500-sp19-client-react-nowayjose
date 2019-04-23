import React, {Component} from 'react'

export default class UmlClassFieldEditor extends Component {
    render() {
        return(
            <div>
                <button className="btn float-right">
                    <i className="fa fa-bars"></i>
                </button>
                {
                    this.props.field.editing ?
                        <button className="btn btn-primary float-right">
                            Save
                        </button> :
                        <button className="btn btn-primary float-right">
                            Add
                        </button>
                }
                <form className="form-inline">
                    <div className="form-group mb-2">
                        <select className="form-control">
                            <option>#</option>
                            <option>+</option>
                            <option>-</option>
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <input type="text"
                               className="form-control"
                               placeholder="FieldName"/>
                    </div>
                    <div className="form-group mb-2">
                        <select className="form-control">
                            <option>String</option>
                            <option>Date</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

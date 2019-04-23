import React from 'react'
import UMLClassField from './UMLClassField'

const UMLClass = ({umlClass}) =>
    <div>
        <div className="card" style={{width: "32rem"}}>
            <div className="padding-right-0px card-header text-center text-white bg-primary">
                <button className="btn btn-danger float-right margin-left-5px">
                    Delete
                </button>
                <button className="btn btn-success float-right">
                    Edit
                </button>
                <h4>{umlClass.name}</h4>
            </div>
            <ul className="list-group">
                {
                    umlClass.fields.map((field, index) =>
                        <UMLClassField
                            key={index}
                            umlClassField={field}/>
                    )
                }
                <li className="list-group-item padding-right-10px">
                    <button className="btn btn-primary float-right">
                        Add
                    </button>
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
                                <option>List</option>
                            </select>
                        </div>
                        <div className="form-group mb-2">
                            <select className="form-control">
                                <option>Employee</option>
                                <option>Project</option>
                            </select>
                        </div>
                    </form>
                </li>
            </ul>
        </div>
    </div>
export default UMLClass
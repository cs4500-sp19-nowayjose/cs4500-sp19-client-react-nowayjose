import React from 'react'
import UmlClassFieldEditor from './UmlClassFieldEditor'

const UMLClassField = ({umlClassField}) =>
    <li className="list-group-item padding-right-0px">
        {
            umlClassField.editing ?
                <UmlClassFieldEditor
                    field={umlClassField}/>
                : <div>
                    {umlClassField.name}
                    {
                        umlClassField.default ?
                            ` = ${umlClassField.default}` :
                            ''
                    }
                    : {umlClassField.type}
                    <button className="btn float-right">
                        <i className="fa fa-bars"></i>
                    </button>
                    <button className="btn btn-danger float-right margin-left-5px">
                        Delete
                    </button>
                    <button className="btn btn-success float-right">
                        Edit
                    </button>
                </div>
        }
    </li>
export default UMLClassField
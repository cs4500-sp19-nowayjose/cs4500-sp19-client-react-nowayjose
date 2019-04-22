import React from 'react'
import UMLClass from './UMLClass'
import umlClassDiagram from './uml.mock.json'

const UMLClassDiagram = () =>
    <div>
        {
            umlClassDiagram.classes.map((umlClass, index) =>
                <UMLClass key={index} umlClass={umlClass}/>
            )
        }
    </div>

export default UMLClassDiagram
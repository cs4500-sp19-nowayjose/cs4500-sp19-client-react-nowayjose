import React from 'react'

export default function questionTable({ 
  filterState,
  pageState,
  handleFilterChange,
  serviceQuestions,
  deleteQuestion
}) {
  const { page, resultsPerPage } = pageState;
  return (
    <table className="table">
      <TableHeader filterState={filterState} handleFilterChange={handleFilterChange} />
      <TableBody
        serviceQuestions={serviceQuestions}
        page={page}
        resultsPerPage={resultsPerPage}
        deleteQuestion={deleteQuestion}
      />
    </table>
  )
}

function TableHeader({ filterState, handleFilterChange }) {
  const { title, description, serviceQuestionType } = filterState;
  return (
    <thead>
      <TitleHeader />
      <FilterHeader
        title={title}
        description={description}
        serviceQuestionType={serviceQuestionType}
        onFilterChange={handleFilterChange}
      />
    </thead>
  )
}

function TitleHeader() {
  return (
    <tr>
      <th>Title</th>
      <th>Description</th>
      <th>Type</th>
      <th> </th>
    </tr>
  )
}

function FilterHeader({ title, description, serviceQuestionType, onFilterChange }) {
  return (
    <tr>
      <th><input type="text" value={title} onChange={(e) => onFilterChange(e, 'title')}/></th>
      <th><input type="text" value={description} onChange={(e) => onFilterChange(e, 'description')}/></th>
      <th><input type="text" value={serviceQuestionType} disabled/></th>
      <th>
        <button type="button" className="btn btn-primary">Add</button>
      </th>
      <th>
        <button type="button" className="btn btn-success">Save</button>
      </th>
    </tr>
  )
}

function TableBody({ serviceQuestions, page, resultsPerPage, deleteQuestion }) {
  return (
    <tbody>{
      serviceQuestions
        .slice(page * resultsPerPage, (page + 1) * resultsPerPage)
        .map(serviceQuestion => <TableRow serviceQuestion={serviceQuestion} deleteQuestion={deleteQuestion} />)
    }
    </tbody>
  )
}

function TableRow({ serviceQuestion, deleteQuestion }) {
  const { id,  title, description, serviceQuestionType } = serviceQuestion
  return (
    <tr key={id}>
      <td>
        to={`/admin/service-questions/${id}`}>
        {title}</td>
      <td>{description}</td>
      <td>{serviceQuestionType}</td>
      <span onClick={() => deleteQuestion(id)}>X</span>
    </tr>
  )
}
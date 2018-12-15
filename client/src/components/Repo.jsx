import React from 'react';

const Repo = (props) => (
  <div className='repo'>
    <div>
      <label>Repo Name: </label>
      <a href={props.repo.repo}>{props.repo.name}</a>
    </div>
    <div>
      <label>Description: </label>
      <label>{props.repo.description}</label>
    </div>
    <div>
      <label>User: </label>
      <label>{props.repo.user}</label>
    </div> 
    <div>
      <label>Forks: </label>
      <label>{props.repo.forks}</label>
    </div>
    </div>
)

export default Repo;


function ProjectedTax({taxedSalary}) {
  return (
    <article className="p-6 flex flex-col gap-8">
      <div className="returnBtn">
        <i className="fa-solid fa-arrow-left text-white"></i>
      </div>
      <div>
        <p className="text-small font-semibold">Projected Taxed Monthly Salary:</p>
        <div className="relative flex">
          <p className="text-heading-2 font-bold">₱</p>
          <h3 className="text-heading-2 font-bold pl-5 break-words overflow-auto">{taxedSalary}</h3>
        </div>
      </div>
    </article>
  )
}

export default ProjectedTax

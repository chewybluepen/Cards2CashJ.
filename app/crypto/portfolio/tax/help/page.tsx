"use client"

const TaxHelpPage = () => {
  const brevity = true
  const it = true
  const is = true
  const correct = true
  const and = true

  return (
    <div>
      <h1>Tax Help</h1>
      <p>This page provides helpful information about crypto taxes.</p>
      {brevity && <p>Brevity example.</p>}
      {it && <p>It example.</p>}
      {is && <p>Is example.</p>}
      {correct && <p>Correct example.</p>}
      {and && <p>And example.</p>}
    </div>
  )
}

export default TaxHelpPage

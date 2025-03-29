function FormToSheet() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const url =
      'https://script.google.com/macros/s/AKfycbwm9TsH7RjGtwDSdCsUfgB0zMc1XXEcpZE4f0h9_BYF3legxT_MbSLnDFDNbdGNl-Fm/exec';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `Name=${e.target.name.value}&Email=${e.target.email.value}`,
    })
      .then(res => res.text())
      .then(data => {
        alert(data);
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>React to Sheet</h1>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Name 1' /> <br />
        <input name='email' placeholder='Email 1' /> <br />
        <button>Add</button>
      </form>
    </div>
  );
}

export default FormToSheet;

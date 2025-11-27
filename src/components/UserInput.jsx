export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="">
          Initial Investment
          <input type="number" />
        </label>
        <label htmlFor="">
          Annual Investment
          <input type="number" />
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="">
          Expected Return
          <input type="number" />
        </label>
        <label htmlFor="">
          Duration
          <input type="number" />
        </label>
      </div>
    </div>
  );
}

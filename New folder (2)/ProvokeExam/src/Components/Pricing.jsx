import React from 'react';

const App = () => {
  return (
    <div id="choose-the-right-plan-for-you" className="container">
      <h1>Choose the right plan for you</h1>
      <table>
        <thead>
          <tr>
            <th>Monthly</th>
            <th>Yearly</th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Video quality</td>
            <td>Good</td>
            <td>Good</td>
            <td>Better</td>
            <td>Best</td>
          </tr>
          {/* Repeat for each row */}
        </tbody>
      </table>
      <div className="next-button">
        <a href="#">Next</a>
      </div>
    </div>
  );
};

export default Pricing;
import React from "react";
import { Link } from "react-router-dom";

function HeadTailMyOrder(props) {
 
  return (
    <div className="game_main_users_table">
      <table className="head_tail_myorder_table" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Period</th>
            <th>Point</th>
            <th>Result</th>
            <th>Amount</th>
            <th>Win(&#8377;)</th>
          </tr>
        </thead>
        <tbody>
          {props?.result.length > 0 &&
            props?.result.slice(0, 10).map((data, i) => (
              <tr key={i}>
                <td style={{ textAlign: "center" }}>{data?.game_id}</td>
                <td style={{ padding: "5px 0px 0px 15px" }}>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result3">
                      {data?.value === "1" ? "T" : "H"}
                    </div>
                  </div>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    color:
                    data.status == 1
                    ? "green"
                    : data.status == 2
                    ? "blue"
                    : "red",
                  }}
                >
                  {data?.status == 1
                    ? "Win"
                    : data?.status == 2
                    ? "Pending"
                    : "Lose"}
                </td>
                <td style={{ textAlign: "center" }}>{data?.amount}</td>
                <td style={{ textAlign: "center" }}>{data?.winning_amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default HeadTailMyOrder;

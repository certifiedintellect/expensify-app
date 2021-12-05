import React from "react";
import { connect } from "react-redux";
import {
  setTextFilterGen,
  sortByAmountGen,
  sortByDateGen,
  setStartDateGen,
  setEndDateGen,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDateGen(startDate));
    this.props.dispatch(setEndDateGen(endDate));
  };

  onFocusChange = (focusedInput) => {
    this.setState(() => ({ calenderFocused: focusedInput }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilterGen(e.target.value));
          }}
        />
        <select
          onChange={(e) => {
            if (e.target.value === "amount") {
              this.props.dispatch(sortByAmountGen());
            } else {
              this.props.dispatch(sortByDateGen());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          isOutsideRange={() => false}
          numberOfMonths={1}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);

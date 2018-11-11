import React from "react";
import { Row, Col, Tag, Pagination } from "antd";
import Nomatch from "./nomatch";
import htmlToReact from "html-to-react";
import SortResults from "./atoms/sortResults";

const SearchResults = props => {
  const htmlToReactParser = new htmlToReact.Parser();
  const { currentPage } = props;
  const paging = 10;
  const paginfInfo = {
    indexOfLastTodo: currentPage * paging,
    jobList: props.jobFilter.length > 0 ? props.jobFilter : props.allJobs,
    get currentList() {
      const indexOfFirstTodo = this.indexOfLastTodo - paging;
      return this.jobList.slice(indexOfFirstTodo, this.indexOfLastTodo);
    },
    get totalList() {
      return props.jobFilter.length > 0
        ? props.jobFilter.length
        : props.allJobs.length;
    },
    handlePage: function(page) {
      props.onPageChange(page);
    }
  };
  const { currentList, totalList, handlePage } = paginfInfo;
  return props.filter && props.jobFilter.length === 0 ? (
    <Nomatch />
  ) : (
    <Col
      xs={24}
      sm={24}
      md={18}
      lg={12}
      xl={12}
      className="gutter-row"
      style={{
        backgroundColor: "#fff",
        minHeight: 380,
        marginBottom: `50px`
      }}
    >
      <Row
        type="flex"
        justify="space-between"
        gutter={16}
        style={{ padding: `20px 50px` }}
      >
        <Col>
          <strong>{`RESULTS (${totalList})`}</strong>
        </Col>
        <Col>
          <SortResults onSort={props.onSort} />
        </Col>
      </Row>
      {currentList.map((data, index) => (
        <div key={data.id}>
          <Row
            xs={24}
            type="flex"
            gutter={16}
            justify="center"
            style={{ padding: `20px 50px` }}
          >
            <Col xs={24}>
              <h3 className="h3-large">{data.title}</h3>
              <Tag color={data.label}>
                <span>{data.type}</span>
              </Tag>

              <p>
                <span>{data.company} </span> <span>{data.location}</span>
              </p>

              {htmlToReactParser.parse(
                `${data.description.substr(0, 100)} ...`
              )}

              {data.keywords &&
                data.keywords
                  .split(",")
                  .map((keyword, index) => (
                    <Tag key={`keyword-${index}`}>{keyword}</Tag>
                  ))}
            </Col>
          </Row>
          {currentList.length - 1 !== index && <hr />}
        </div>
      ))}
      {currentList.length > 0 && (
        <Pagination
          current={props.currentPage}
          onChange={page => handlePage(page)}
          total={totalList}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 50
          }}
        />
      )}
    </Col>
  );
};

export default SearchResults;

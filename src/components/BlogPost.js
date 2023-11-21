import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const BlogPost = (props) => {
  const postData = props.props;
  console.log("This is props BlogPost", props);
  return (
    <section>
      <Container fluid className="mt-5 pb-5 blogContantArea">
        <Row>
          <Col>
            <Container fluid className="pt-5 pb-5 position-relative">
              <Row>
                <Col>
                  <Container>
                    <Row>
                      <Col md={12} lg={12}>
                        <Container fluid>
                          <Row>
                            <Col sm={12} className="text-start mb-5">
                              <img
                                src={postData.img}
                                className="img-fluid blog-1 "
                                style={{ height: "30%", width: "50%" }}
                              />
                              <h3 className="fs-30 mt-3 mb-3 text-primary d-flex">
                                {postData.postTitle}
                              </h3>
                              {postData.mainParagraphs.map((item) => {
                                // {item.subParagraphs.map((paragraph)=>{
                                //     return <p>{paragraph}</p>
                                // })}
                                return <p className="fs-18">{item}</p>;
                              })}
                              {/* <p className="fs-18">
                                Podcast marketing is one of the industry's most
                                crucial digital marketing strategies. Brands
                                worldwide have used these podcasts to connect
                                with larger audiences, target more prospects and
                                increase their ROI.
                              </p> */}

                              {/* <p>
                                However, the recent market trends also indicate
                                that podcasts could soon become obsolete if not
                                done correctly. A 2022 Marketing Trends Survey
                                report shows that more than 34% of companies
                                plan to stop utilizing podcasts and other audio
                                modes for marketing their business.{" "}
                              </p> */}

                              {/* <p>
                                The main reason for this change is that there
                                are some crucial challenges these companies face
                                with podcasts. The challenges have hindered the
                                podcasts' effectiveness and made their future
                                survival questionable.{" "}
                              </p> */}
                              <p className="fs-18">
                                {postData.postContent.map((item) => {
                                  const paragraph = item.subParagraphs.map(
                                    (itemParagraph) => {
                                      return <p>{itemParagraph}</p>;
                                    }
                                  );

                                  return (
                                    <div>
                                      <h4>{item.title}</h4>
                                      <div>{paragraph}</div>
                                      <br></br>
                                    </div>
                                  );
                                })}
                              </p>

                              <br />
                              {/* <p className="fs-18">
                                <h4>1. Organic Discoverability</h4>
                                Top ranking podcast searches and existing
                                recommendations from existing genres are the two
                                main sources for reaching out to audiences.
                                While these options sound great, they can limit
                                these podcasts' true potential. For instance,
                                most listeners won't even reach your channel,
                                regardless of its effectiveness.
                              </p>
                              <p className="">
                                However, that doesn't mean there is no solution
                                for it. For example, cross-platform marketing
                                for your podcasts could prove a great option for
                                better results. We recommend devising a formal
                                marketing strategy or using short-term
                                strategies like Facebook ads. Once your
                                listeners increase, so will the popularity of
                                the podcast.
                              </p>
                              <p className="fs-18">
                                <h4>2. Collection of Data Insights</h4>
                                <p>
                                  Data records and responses are a crucial part
                                  of any podcast. The number denotes whether a
                                  podcast is moving in the right direction.
                                  However, collecting this data for podcasts can
                                  be challenging because it's difficult to tell
                                  the real listening numbers. The podcasts
                                  usually receive the following information
                                  about their programs:
                                </p>
                                <p>
                                  <ul>
                                    <li>Downloads</li>
                                    <li>Geo-location</li>
                                    <li>Listens</li>
                                    <li>Subscriber count and trends</li>
                                  </ul>
                                </p>
                                <p>
                                  We recommend creating a social presence for
                                  your podcast to better assess and connect with
                                  your audiences. Most podcasts can create
                                  social media profiles and see their listeners'
                                  average age groups, interests, profiles, and
                                  inclinations. They can use this information to
                                  leverage it for their long-term success and
                                  adjust it as needed.
                                </p>
                              </p> */}
                              {/* <p className="fs-18">
                                <h4>3. Diversity in Voices</h4>
                                <p>
                                  Creating the right channel to denote the
                                  various listeners, their concerns, and their
                                  representation can be challenging for more
                                  podcasts. The need for representation has
                                  sky-rocketed in the last decade, and podcasts
                                  should also incorporate it into business.
                                </p>
                              </p>
                              <p>
                                Using the right marketing techniques for your
                                podcasts can help counter this problem. For
                                example, brand and influencer marketing are two
                                top options to minimize the issues with these
                                podcasts.
                              </p>
                              <p>
                                {" "}
                                The more your audience connects with the podcast
                                mentally, the better you can voice their
                                concerns. You will also develop the strategy
                                soon and maximize the results.
                              </p> */}
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

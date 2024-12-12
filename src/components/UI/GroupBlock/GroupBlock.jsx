import React from "react";
import classes from "./_GroupBlock.module.scss"

const GroupBlock = () => {
    return (
        <div className={classes.group_block}>
                    <div className={classes.upper_group_block}>
                        <div className={classes.left_upper_block}>
                        <h3 className={classes.left_upper_block_text}>Группы</h3>
                        <ul className={classes.left_upper_block_ul}>
                            <li className={classes.left_upper_block_ul_item}>
                                <p>Group A</p>
                                <p>72 messages</p>
                            </li>
                            <li className={classes.left_upper_block_ul_item}>
                                <p>Group B</p>
                                <p>72 messages</p>
                                </li>
                            <li className={classes.left_upper_block_ul_item}>
                                <p>Group C</p>
                                <p>72 messages</p>
                            </li>
                            <li className={classes.left_upper_block_ul_item}>
                                <p>Group D</p>
                                <p>72 messages</p>
                            </li>
                        </ul>
                        <button className={classes.left_upper_block_button}>Фильтры</button>
                        </div>
                        
                        <div className={classes.right_upper_block}>
                            <h3 className={classes.right_upper_block_text}>Сообщения</h3>
                            <ul className={classes.right_upper_block_ul}>
                                <li className={classes.right_upper_block_ul_item}>
                                    <div className={classes.right_upper_block_ul_item_upper_text}>
                                        <div className={classes.right_upper_block_ul_item_upper_text_left}>Messages from Group 1</div>
                                        <div className={classes.right_upper_block_ul_item_upper_text_right}>33</div>
                                    </div>
                                    <div className={classes.right_upper_block_ul_item_lower_text}>
                                        <div className={classes.right_upper_block_ul_item_lower_text_positive}>20 Positive</div>
                                        <div className={classes.right_upper_block_ul_item_lower_text_negative}>13 Negative</div>
                                    </div>
                                </li>
                                <li className={classes.right_upper_block_ul_item}>
                                    <div className={classes.right_upper_block_ul_item_upper_text}>
                                        <div className={classes.right_upper_block_ul_item_upper_text_left}>Messages from Group 1</div>
                                        <div className={classes.right_upper_block_ul_item_upper_text_right}>33</div>
                                    </div>
                                    <div className={classes.right_upper_block_ul_item_lower_text}>
                                        <div className={classes.right_upper_block_ul_item_lower_text_positive}>20 Positive</div>
                                        <div className={classes.right_upper_block_ul_item_lower_text_negative}>13 Negative</div>
                                    </div>
                                </li>
                                <li className={classes.right_upper_block_ul_item}>
                                    <div className={classes.right_upper_block_ul_item_upper_text}>
                                        <div className={classes.right_upper_block_ul_item_upper_text_left}>Messages from Group 1</div>
                                        <div className={classes.right_upper_block_ul_item_upper_text_right}>33</div>
                                    </div>
                                    <div className={classes.right_upper_block_ul_item_lower_text}>
                                        <div className={classes.right_upper_block_ul_item_lower_text_positive}>20 Positive</div>
                                        <div className={classes.right_upper_block_ul_item_lower_text_negative}>13 Negative</div>
                                    </div>
                                </li>
                                <li className={classes.right_upper_block_ul_item}>
                                    <div className={classes.right_upper_block_ul_item_upper_text}>
                                        <div className={classes.right_upper_block_ul_item_upper_text_left}>Messages from Group 1</div>
                                        <div className={classes.right_upper_block_ul_item_upper_text_right}>33</div>
                                    </div>
                                    <div className={classes.right_upper_block_ul_item_lower_text}>
                                        <div className={classes.right_upper_block_ul_item_lower_text_positive}>20 Positive</div>
                                        <div className={classes.right_upper_block_ul_item_lower_text_negative}>13 Negative</div>
                                    </div>
                                </li>
                            </ul>
                            <button className={classes.right_upper_block_button}>Фильтры</button>
                        </div>
                    </div>

                    <div className={classes.lower_group_block}>
                        <ul className={classes.lower_group_block_reviews}>
                            <li className={classes.lower_group_block_reviews_item}>
                                <h4 className={classes.lower_group_block_reviews_item_h4}>Group A</h4>
                                <p className={classes.lower_group_block_reviews_item_p}>10.01.2025</p>
                                <p className={classes.lower_group_block_reviews_item_p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, nostrum magnam id, iste impedit dolorum enim iusto officia quaerat mollitia laudantium iure vitae nulla debitis qui suscipit cum ea obcaecati alias assumenda at dignissimos? Exercitationem adipisci, dolore eius quis aut nostrum, hic unde aspernatur voluptatem obcaecati, et a? Id, quos?</p>
                                <p>Positive</p>
                            </li>
                            <li className={classes.lower_group_block_reviews_item}>
                                <h4 className={classes.lower_group_block_reviews_item_h4}>Group B</h4>
                                <p className={classes.lower_group_block_reviews_item_p}>10.01.2025</p>
                                <p className={classes.lower_group_block_reviews_item_p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, nostrum magnam id, iste impedit dolorum enim iusto officia quaerat mollitia laudantium iure vitae nulla debitis qui suscipit cum ea obcaecati alias assumenda at dignissimos? Exercitationem adipisci, dolore eius quis aut nostrum, hic unde aspernatur voluptatem obcaecati, et a? Id, quos?</p>
                                <p>Negative</p>
                            </li>
                            <li className={classes.lower_group_block_reviews_item}>
                                <h4 className={classes.lower_group_block_reviews_item_h4}>Group C</h4>
                                <p className={classes.lower_group_block_reviews_item_p}>10.01.2025</p>
                                <p className={classes.lower_group_block_reviews_item_p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, nostrum magnam id, iste impedit dolorum enim iusto officia quaerat mollitia laudantium iure vitae nulla debitis qui suscipit cum ea obcaecati alias assumenda at dignissimos? Exercitationem adipisci, dolore eius quis aut nostrum, hic unde aspernatur voluptatem obcaecati, et a? Id, quos?</p>
                                <p>Positive</p>
                            </li>
                        </ul>
                    </div>
        </div>
    )
}

export default GroupBlock;
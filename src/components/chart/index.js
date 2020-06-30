import React from 'react';
import './chart.scss'
import { Link } from "gatsby"
import Images from '../image'
import { render } from 'react-dom';
import MediaQuery from 'react-responsive';
// const ForceGraph2D = typeof window !== `undefined` ? require("react-force-graph-2d") : null
import ForceGraph2D from 'react-force-graph-2d';


const Chart = ({ data }) => {

    const titleList = ["projects", "health", "music", "iot"];

    const color = ["#3e3a39", "#cb8e34", "#005f8b", "#35713e"]


    // const getImg = src => {
    //     const img = <img alt="" />;
    //     img.src = `../../images/${src}`;
    //     img.width = 13;
    //     img.height = 13;
    //     return img;
    // }

    var dataList = {
        nodes: data.allMarkdownRemark.edges.map(({ node }) => {
            return (
                {
                    id: node.frontmatter.path,
                    category: node.frontmatter.category[0],
                    thumbnail: node.frontmatter.thumbnail,
                    title: node.frontmatter.title,
                    date: node.frontmatter.date,
                    event: node.frontmatter.event,
                    overview: node.frontmatter.overview,
                    val: 15
                }
            );
        }),
        links: data.allMarkdownRemark.edges.map(({ node }) => {
            return (
                {
                    source: node.frontmatter.category[0],
                    target: node.frontmatter.path,
                }
            );
        }),
    }
    dataList.nodes.push(
        { id: "projects", title: "", category: "projects", val: 2, thumbnail: `gatsby.png`, },
        { id: "health", title: "Health", category: "health", val: 10, thumbnail: `gatsby.png`, },
        { id: "iot", title: "IoT", category: "iot", val: 10, thumbnail: `gatsby.png`, },
        { id: "music", title: "Music", category: "music", val: 10, thumbnail: `gatsby.png`, },
    );
    dataList.links.push(
        { source: "projects", target: "health" },
        { source: "projects", target: "iot" },
        { source: "projects", target: "music" }
    );

    const canvasObject = function (node, ctx, globalScale, shadow) {
        const label = node.title;
        const fontSize = 250 / globalScale / node.val;
        ctx.font = `${fontSize}px Sans-Serif`;
        // const textWidth = ctx.measureText(label).width;
        // const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding
        ctx.beginPath();
        // ctx.arc(node.x, node.y, node.val, 0, 2 * Math.PI, false);
        // if (titleList.indexOf(node.category) === -1) ctx.fillStyle = "white";
        // else ctx.fillStyle = color[titleList.indexOf(node.category)];
        // ctx.fill();
        // ctx.drawImage(node.thumbnail, node.x, node.y);
        if (titleList.indexOf(node.category) === -1) ctx.fillStyle = "black";
        else ctx.fillStyle = color[titleList.indexOf(node.category)];
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        if (titleList.indexOf(node.id) === -1) ctx.font = "14px";
        else ctx.font = "10px";
        ctx.fillText(label, node.x, node.y - 5);
    };

    var nodeDetail =
        <div id="graph-tag">
            <div id="img"><Images filename="gatsby.png" className="imgObj" /></div>
            <div id="detail-div">
                <div id="title">Title</div>
                <div id="subdetail">
                    {/* <span id="date">Date</span> */}
                    {/* <span id="category">Category</span> */}
                    <span id="event">Event</span>
                </div>
                <hr />
                <div id="detail">Detail</div>
            </div>
            <Link to="/projects/">
                <div id="link">
                    MORE
                </div>
            </Link>
        </div >
        ;

    const onNodeClick = function (nodeId) {
        console.log(nodeId.thumbnail);
        if (titleList.indexOf(nodeId.id) === -1) {
            nodeDetail =
                <div id="graph-tag">
                    <div id="img"><Images filename={nodeId.thumbnail} className="imgObj" /></div>
                    <div id="detail-div">
                        <div id="title">{nodeId.title}</div>
                        <div id="subdetail">
                            {/* <span id="date">{nodeId.date}</span> */}
                            {/* <span id="category">{nodeId.category}</span> */}
                            <span id="event">{nodeId.event}</span>
                        </div>
                        <hr />
                        <div id="detail">{nodeId.overview}</div>
                    </div>
                    <Link to={"/" + nodeId.id}>
                        <div id="link">
                            MORE
                        </div>
                    </Link>
                </div>
                ;
        } else {
            nodeDetail =
                <div id="graph-tag" title="main">
                    <div id="img"><Images filename={nodeId.thumbnail} className="imgObj" /></div>
                    <div id="detail-div">
                        <div id="title">{nodeId.title}</div>
                        <div id="detail">{nodeId.overview}</div>
                    </div>
                </div>
                ;
        }
    };

    const onNodeHover = function (nodeId) {
        if (nodeId == null) render(nodeDetail, document.getElementById("graph-tag"));
        else {
            try {
                // var position = document.getElementById(nodeId).getBoundingClientRect();
                if (titleList.indexOf(nodeId.id) === -1) {
                    render(
                        <div id="graph-tag">
                            <div id="img"><Images filename={nodeId.thumbnail} className="imgObj" /></div>
                            <div id="detail-div">
                                <div id="title">{nodeId.title}</div>
                                <div id="subdetail">
                                    {/* <span id="date">{nodeId.date}</span> */}
                                    {/* <span id="category">{nodeId.category}</span> */}
                                    <span id="event">{nodeId.event}</span>
                                </div>
                                <hr />
                                <div id="detail">{nodeId.overview}</div>
                            </div>
                            <Link to={"/" + nodeId.id}>
                                <div id="link">
                                    MORE
                                </div>
                            </Link>
                        </div>
                        , document.getElementById("graph-tag")
                    );
                } else {
                    render(
                        <div id="graph-tag" title="main">
                            <div id="img"><Images filename={nodeId.thumbnail} className="imgObj" /></div>
                            <div id="detail-div">
                                <div id="title">{nodeId.title}</div>
                                <div id="detail">{nodeId.overview}</div>
                            </div>
                        </div>
                        , document.getElementById("graph-tag")
                    );

                }
            } catch (error) { }
        }
    };

    return (
        <div id="graph">
            <div id="graph-tag">
            </div>
            <div id="graph-canvas">
                <MediaQuery query="(max-width: 767px)">
                    <ForceGraph2D
                        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                        graphData={dataList}
                        onNodeHover={onNodeHover}
                        onNodeClick={onNodeClick}
                        nodeCanvasObject={canvasObject}
                        enableZoomPanInteraction={false}
                        width={468}
                        height={500}
                        linkWidth={3}
                        linkVisibility={false}
                    />
                </MediaQuery>
                <MediaQuery query="(min-width: 570px)">
                    <ForceGraph2D
                        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                        graphData={dataList}
                        onNodeHover={onNodeHover}
                        onNodeClick={onNodeClick}
                        nodeCanvasObject={canvasObject}
                        enableZoomPanInteraction={false}
                        width={800}
                        height={500}
                        linkVisibility={false}
                        linkWidth={3}
                    />
                </MediaQuery>
            </div>
        </div >
    );
}

export default Chart
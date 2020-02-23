import React from 'react';
import './chart.scss'
import ForceGraph2D from 'react-force-graph-2d';
import { Link } from "gatsby"
import Images from '../image'
import { render } from 'react-dom';
import MediaQuery from 'react-responsive';

const Chart = ({ data }) => {

    const titleList = ["projects", "health", "music", "iot"];

    const getImg = src => {
        const img = <img alt="" />;
        img.src = `../../images/${src}`;
        img.width = 13;
        img.height = 13;
        return img;
    }

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
        { id: "projects", title: "", category: "center", val: 4, thumbnail: `android.png`, },
        { id: "health", title: "Health", category: "health", val: 10, thumbnail: `android.png`, },
        { id: "iot", title: "IoT", category: "iot", val: 10, thumbnail: `android.png`, },
        { id: "music", title: "Music", category: "music", val: 10, thumbnail: `android.png`, },
    );
    dataList.links.push(
        { source: "projects", target: "health" },
        { source: "projects", target: "iot" },
        { source: "projects", target: "music" }
    );

    const canvasObject = function (node, ctx, globalScale, shadow) {
        const label = node.title;
        const fontSize = 20 / globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        // const textWidth = ctx.measureText(label).width;
        // const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.val, 0, 2 * Math.PI, false);
        ctx.fillStyle = node.color;
        ctx.fill();
        // ctx.drawImage(node.thumbnail, node.x, node.y);
        ctx.fillStyle = 'black';
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        if (titleList.indexOf(node.id) === -1) ctx.font = "14px";
        else ctx.font = "10px";
        ctx.fillText(label, node.x, node.y - 5);
    };

    var nodeDetail =
        <div id="graph-tag">
            <div id="img"><Images filename="android.png" className="imgObj" /></div>
            <div id="title">Title</div>
            <div id="subdetail">
                <span id="date">Date</span>
                <span id="category">Category</span>
                <span id="event">Event</span>
            </div>
            <div id="detail">Detail</div>
            <Link to="/projects/">
                <div id="link">
                    more
                </div>
            </Link>
        </div>
        ;

    const onNodeClick = function (nodeId) {
        console.log(nodeId.thumbnail);
        if (titleList.indexOf(nodeId.id) === -1) {
            nodeDetail =
                <div id="graph-tag">
                    <div id="img"><Images filename={nodeId.thumbnail} className="imgObj" /></div>
                    <div id="title">{nodeId.title}</div>
                    <div id="subdetail">
                        <span id="date">{nodeId.date}</span>
                        <span id="category">{nodeId.category}</span>
                        <span id="event">{nodeId.event}</span>
                    </div>
                    <div id="detail">{nodeId.overview}</div>
                    <Link to={"/" + nodeId.id}>
                        <div id="link">
                            more
                        </div>
                    </Link>
                </div>
                ;
        } else {
            nodeDetail =
                <div id="graph-tag" title="main">
                    <div id="img"><Images filename={nodeId.thumbnail} className="imgObj" /></div>
                    <div id="title">{nodeId.title}</div>
                    <div id="detail">{nodeId.overview}</div>
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
                            <div id="title">{nodeId.title}</div>
                            <div id="subdetail">
                                <span id="date">{nodeId.date}</span>
                                <span id="category">{nodeId.category}</span>
                                <span id="event">{nodeId.event}</span>
                            </div>
                            <div id="detail">{nodeId.overview}</div>
                            <Link to={"/" + nodeId.id}>
                                <div id="link">
                                    more
                                </div>
                            </Link>
                        </div>
                        , document.getElementById("graph-tag")
                    );
                } else {
                    render(
                        <div id="graph-tag" title="main">
                            <div id="img"><Images filename={nodeId.thumbnail} className="imgObj" /></div>
                            <div id="title">{nodeId.title}</div>
                            <div id="detail">{nodeId.overview}</div>
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
                <MediaQuery query="(max-width: 768px)">
                    <ForceGraph2D
                        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                        graphData={dataList}
                        nodeAutoColorBy="category"
                        onNodeHover={onNodeHover}
                        onNodeClick={onNodeClick}
                        nodeCanvasObject={canvasObject}
                        enableZoomPanInteraction={false}
                        width={468}
                        height={500}
                        linkWidth={2}
                    />
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
                    <ForceGraph2D
                        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                        graphData={dataList}
                        nodeAutoColorBy="category"
                        onNodeHover={onNodeHover}
                        onNodeClick={onNodeClick}
                        nodeCanvasObject={canvasObject}
                        enableZoomPanInteraction={false}
                        width={800}
                        height={500}
                        linkWidth={2}
                    />
                </MediaQuery>
            </div>
        </div >
    );
}

export default Chart
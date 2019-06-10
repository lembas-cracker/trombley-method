import React from "react";
import { hoverHandleOver } from "./hoverHandleFunction.js";
import { hoverHandleOut } from "./hoverHandleFunction.js";

export default class Chart extends React.Component {
  render() {
    return (
      <svg
        width="519"
        height="359"
        viewBox="0 0 519 359"
        style={{ "enable-background": "new 0 0 519 359", position: "fixed" }}
        xmlSpace="preserve"
      >
        <g>
          <g>
            <g>
              <g>
                <g>
                  <line class="st0" x1="464" y1="183.3" x2="438.6" y2="183.3" />
                  <path
                    style={{ fill: "#D7D2CE" }}
                    hoverHandle="materials"
                    onMouseOver={() => hoverHandleOver("materials")}
                    onMouseOut={() => hoverHandleOut("materials")}
                    onClick={() => this.props.toggleVisibility("materials")}
                    d="M464,184.7h-4v-2.9h4V184.7z M458.1,184.7h-4v-2.9h4V184.7z M452.1,184.7h-4v-2.9h4V184.7z M446.1,184.7
            h-4v-2.9h4V184.7z M440.2,184.7h-1.5v-2.9h1.5V184.7z"
                  />
                </g>
                <g>
                  <path
                    style={{ fill: "#D7D2CE" }}
                    hoverHandle="materials"
                    onMouseOver={() => hoverHandleOver("materials")}
                    onMouseOut={() => hoverHandleOut("materials")}
                    onClick={() => this.props.toggleVisibility("materials")}
                    d="M467.3,184.8c0.2-1.2-0.1-2.5-0.7-3.7c-0.3,0-0.7-0.1-1-0.1c-0.1,0.7-0.1,1.4-0.1,2.2c0,0.6,0,1.3,0.1,1.9
            c0.6,0,1.2-0.1,1.8-0.1C467.2,184.9,467.3,184.9,467.3,184.8z"
                  />
                </g>
              </g>
            </g>
            <g>
              <g>
                <g>
                  <path
                    style={{ fill: "#D7D2CE" }}
                    d="M236.7,42.1c-1.5-0.7-2.6-2.1-2.6-3.9c0-0.2,0-0.4,0.1-0.6L222,30.7l14.7,24.7V42.1z"
                    hoverHandle="learning"
                    onMouseOver={() => hoverHandleOver("learning")}
                    onMouseOut={() => hoverHandleOut("learning")}
                    onClick={() => this.props.toggleVisibility("learning")}
                  />
                  <path
                    style={{ fill: "#D7D2CE" }}
                    d="M203.5,58h30.9c0-0.1,0.1-0.2,0.1-0.3l-15.2-25.6c-0.3,0.1-0.6,0.1-0.9,0.1s-0.6,0-0.9-0.1L202.7,57
            C203.1,57.3,203.4,57.6,203.5,58z"
                    hoverHandle="learning"
                    onMouseOver={() => hoverHandleOver("learning")}
                    onMouseOut={() => hoverHandleOut("learning")}
                    onClick={() => this.props.toggleVisibility("learning")}
                  />
                  <path
                    style={{ fill: "#D7D2CE" }}
                    d="M203.6,61.1l11.9,6.7c0.8-0.7,1.9-1.2,3-1.2c1.2,0,2.2,0.5,3,1.2l12.3-6.9h-30.2
            C203.7,60.9,203.6,61,203.6,61.1z"
                    hoverHandle="learning"
                    onMouseOver={() => hoverHandleOver("learning")}
                    onMouseOut={() => hoverHandleOut("learning")}
                    onClick={() => this.props.toggleVisibility("learning")}
                  />
                  <path
                    style={{ fill: "#D7D2CE" }}
                    d="M203.7,37.1c0.1,0.4,0.2,0.7,0.2,1.1c0,2-1.5,3.8-3.5,4.1v13L215,30.7L203.7,37.1z"
                    hoverHandle="learning"
                    onMouseOver={() => hoverHandleOver("learning")}
                    onMouseOut={() => hoverHandleOut("learning")}
                    onClick={() => this.props.toggleVisibility("learning")}
                  />
                  <path
                    style={{ fill: "#D7D2CE" }}
                    hoverHandle="learning"
                    onMouseOver={() => hoverHandleOver("learning")}
                    onMouseOut={() => hoverHandleOut("learning")}
                    onClick={() => this.props.toggleVisibility("learning")}
                    d="M425.1,11.3H12.9c-7.3,0-13.4,5.8-13.4,13v58.8c-0.1,0.2-0.2,0.5-0.2,0.7s0.1,0.5,0.2,0.7v257.7
            c0,7.1,6.1,13,13.4,13H425c7.3,0,13.4-5.9,13.4-13V24.4C438.5,17.1,432.4,11.3,425.1,11.3z M195.1,38.2c0-0.6,0.1-1.2,0.4-1.6
            c0.2-0.5,0.6-1,1-1.4c0.2-0.2,0.4-0.4,0.7-0.5c0.5-0.3,1-0.6,1.6-0.7c0.3-0.1,0.6-0.1,0.9-0.1s0.6,0,0.9,0.1
            c0.6,0.1,1.1,0.4,1.6,0.7l0.1,0.1l12-6.8c0-2.4,2-4.3,4.5-4.3s4.5,1.9,4.5,4.3l12.6,7c0.2-0.1,0.3-0.3,0.5-0.4
            c0.5-0.3,1-0.6,1.6-0.7c0.3-0.1,0.6-0.1,0.9-0.1s0.6,0,0.9,0.1c0.6,0.1,1.1,0.4,1.6,0.7c0.2,0.2,0.5,0.3,0.7,0.5
            c0.4,0.4,0.7,0.9,1,1.4c0.2,0.5,0.4,1.1,0.4,1.6c0,2-1.4,3.7-3.3,4.1v13.2c1.9,0.5,3.3,2.1,3.3,4.1c0,0.6-0.1,1.2-0.4,1.6
            c-0.2,0.5-0.6,1-1,1.4c-0.2,0.2-0.4,0.4-0.7,0.5c-0.5,0.3-1,0.6-1.6,0.7c-0.3,0.1-0.6,0.1-0.9,0.1s-0.6,0-0.9-0.1
            c-0.6-0.1-1.1-0.4-1.6-0.7c-0.1,0-0.1-0.1-0.2-0.1l-13,7.2c0,0.2,0.1,0.4,0.1,0.6c0,0.6-0.1,1.2-0.4,1.6c-0.2,0.5-0.6,1-1,1.4
            c-0.2,0.2-0.4,0.4-0.7,0.5c-0.5,0.3-1,0.6-1.6,0.7c-0.3,0.1-0.6,0.1-0.9,0.1s-0.6,0-0.9-0.1c-0.6-0.1-1.1-0.4-1.6-0.7
            c-0.2-0.2-0.5-0.3-0.7-0.5c-0.4-0.4-0.7-0.9-1-1.4c-0.2-0.5-0.4-1.1-0.4-1.6c0-0.2,0-0.4,0.1-0.6l-12.5-7
            c-0.4,0.2-0.9,0.4-1.3,0.5c-0.3,0.1-0.6,0.1-0.9,0.1s-0.6,0-0.9-0.1c-0.6-0.1-1.1-0.4-1.6-0.7c-0.2-0.2-0.5-0.3-0.7-0.5
            c-0.4-0.4-0.7-0.9-1-1.4c-0.2-0.5-0.4-1.1-0.4-1.6c0-1.6,1-3.1,2.4-3.8V42C196,41.2,195.1,39.8,195.1,38.2z M435.5,342.2
            c0,5.6-4.7,10.1-10.4,10.1H12.9c-5.8,0-10.4-4.5-10.4-10.1v-257h433V342.2z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <path
                      style={{ fill: "#D7D2CE" }}
                      hoverHandle="order"
                      onMouseOver={() => hoverHandleOver("order")}
                      onMouseOut={() => hoverHandleOut("order")}
                      onClick={() => this.props.toggleVisibility("order")}
                      d="M412.5,106.1H29.3c-5.2,0-9.4,4.1-9.4,9.2v208.3c0,5,4.3,9.2,9.4,9.2h383.2c1.9,0,3.5-1.5,3.5-3.4V109.5
              C416,107.6,414.5,106.1,412.5,106.1z M413,329.4c0,0.3-0.2,0.5-0.5,0.5H88.4V109h324.1c0.3,0,0.5,0.2,0.5,0.5V329.4z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      style={{ fill: "#D7D2CE" }}
                      hoverHandle="type"
                      onMouseOver={() => hoverHandleOver("type")}
                      onMouseOut={() => hoverHandleOut("type")}
                      onClick={() => this.props.toggleVisibility("type")}
                      d="M150.2,186.5c-19.1,0-34.6,15.1-34.6,33.6s15.5,33.6,34.6,33.6s34.6-15.1,34.6-33.6
              C184.7,201.7,169.2,186.5,150.2,186.5z"
                    />
                    <g>
                      <polygon
                        style={{ fill: "#FFFFFF" }}
                        points="130.5,209.2 150.2,198.2 169.7,209.2 169.7,231.2 150.2,242.2 130.5,231.2 							"
                      />
                      <path
                        style={{ fill: "#D7D2CE" }}
                        hoverHandle="type"
                        onMouseOver={() => hoverHandleOver("type")}
                        onMouseOut={() => hoverHandleOut("type")}
                        onClick={() => this.props.toggleVisibility("type")}
                        d="M150.2,243.8L129,232v-23.6l21.2-11.9l21.2,11.9V232L150.2,243.8z M132,230.3l18.2,10.1l18.2-10.1V210
                l-18.2-10.1L132,210V230.3z"
                      />
                    </g>
                    <g>
                      <path class="st0" d="M184.2,220.3c4.3,0,8.7,0,13,0" />
                      <g>
                        <rect
                          style={{ fill: "#D7D2CE" }}
                          hoverHandle="type"
                          onMouseOver={() => hoverHandleOver("type")}
                          onMouseOut={() => hoverHandleOut("type")}
                          onClick={() => this.props.toggleVisibility("type")}
                          x="184.2"
                          y="218.9"
                          class="st1"
                          width="2"
                          height="2.9"
                        />
                        <path
                          style={{ fill: "#D7D2CE" }}
                          hoverHandle="type"
                          onMouseOver={() => hoverHandleOver("type")}
                          onMouseOut={() => hoverHandleOut("type")}
                          onClick={() => this.props.toggleVisibility("type")}
                          d="M202,221.8h-3.5v-2.9h3.5V221.8z M196.7,221.8h-3.5v-2.9h3.5V221.8z M191.5,221.8H188v-2.9h3.5V221.8z"
                        />
                      </g>
                    </g>
                    <path
                      style={{ fill: "#D7D2CE" }}
                      hoverHandle="type"
                      onMouseOver={() => hoverHandleOver("type")}
                      onMouseOut={() => hoverHandleOut("type")}
                      onClick={() => this.props.toggleVisibility("type")}
                      d="M205.4,218.7c-0.1,0-0.2,0-0.3,0.1c-1,0.2-2.1,0.2-3.1,0.1c0,1.1,0.1,2.2,0.1,3.3
              c0.2-0.1,0.5-0.1,0.8-0.1h2.5C205.3,220.9,205.3,219.8,205.4,218.7z"
                    />
                    <g>
                      <line
                        class="st0"
                        x1="136.9"
                        y1="213.3"
                        x2="140.3"
                        y2="213.3"
                      />
                      <rect
                        style={{ fill: "#D7D2CE" }}
                        hoverHandle="type"
                        onMouseOver={() => hoverHandleOver("type")}
                        onMouseOut={() => hoverHandleOut("type")}
                        onClick={() => this.props.toggleVisibility("type")}
                        x="136.9"
                        y="211.8"
                        class="st1"
                        width="3.5"
                        height="2.9"
                      />
                    </g>
                    <g>
                      <line
                        class="st0"
                        x1="136.9"
                        y1="218"
                        x2="140.3"
                        y2="218"
                      />
                      <rect
                        style={{ fill: "#D7D2CE" }}
                        hoverHandle="type"
                        onMouseOver={() => hoverHandleOver("type")}
                        onMouseOut={() => hoverHandleOut("type")}
                        onClick={() => this.props.toggleVisibility("type")}
                        x="136.9"
                        y="216.5"
                        class="st1"
                        width="3.5"
                        height="2.9"
                      />
                    </g>
                    <g>
                      <line
                        class="st0"
                        x1="136.9"
                        y1="222.8"
                        x2="140.3"
                        y2="222.8"
                      />
                      <rect
                        style={{ fill: "#D7D2CE" }}
                        hoverHandle="type"
                        onMouseOver={() => hoverHandleOver("type")}
                        onMouseOut={() => hoverHandleOut("type")}
                        onClick={() => this.props.toggleVisibility("type")}
                        x="136.9"
                        y="221.4"
                        class="st1"
                        width="3.5"
                        height="2.9"
                      />
                    </g>
                    <g>
                      <line
                        class="st0"
                        x1="136.9"
                        y1="227.3"
                        x2="140.3"
                        y2="227.3"
                      />
                      <rect
                        style={{ fill: "#D7D2CE" }}
                        hoverHandle="type"
                        onMouseOver={() => hoverHandleOver("type")}
                        onMouseOut={() => hoverHandleOut("type")}
                        onClick={() => this.props.toggleVisibility("type")}
                        x="136.9"
                        y="225.8"
                        class="st1"
                        width="3.5"
                        height="2.9"
                      />
                    </g>
                    <g>
                      <line
                        class="st0"
                        x1="143.5"
                        y1="213.3"
                        x2="156.9"
                        y2="213.3"
                      />
                      <rect
                        style={{ fill: "#D7D2CE" }}
                        hoverHandle="type"
                        onMouseOver={() => hoverHandleOver("type")}
                        onMouseOut={() => hoverHandleOut("type")}
                        onClick={() => this.props.toggleVisibility("type")}
                        x="143.5"
                        y="211.8"
                        class="st1"
                        width="13.4"
                        height="2.9"
                      />
                    </g>
                    <g>
                      <line
                        class="st0"
                        x1="143.5"
                        y1="218"
                        x2="162.9"
                        y2="218"
                      />
                      <rect
                        style={{ fill: "#D7D2CE" }}
                        hoverHandle="type"
                        onMouseOver={() => hoverHandleOver("type")}
                        onMouseOut={() => hoverHandleOut("type")}
                        onClick={() => this.props.toggleVisibility("type")}
                        x="143.5"
                        y="216.5"
                        class="st1"
                        width="19.4"
                        height="2.9"
                      />
                    </g>
                    <g>
                      <line
                        class="st0"
                        x1="143.5"
                        y1="222.8"
                        x2="159.8"
                        y2="222.8"
                      />
                      <rect
                        style={{ fill: "#D7D2CE" }}
                        hoverHandle="type"
                        onMouseOver={() => hoverHandleOver("type")}
                        onMouseOut={() => hoverHandleOut("type")}
                        onClick={() => this.props.toggleVisibility("type")}
                        x="143.5"
                        y="221.4"
                        class="st1"
                        width="16.3"
                        height="2.9"
                      />
                    </g>
                    <g>
                      <line
                        class="st0"
                        x1="143.5"
                        y1="227.3"
                        x2="155.4"
                        y2="227.3"
                      />
                      <rect
                        style={{ fill: "#D7D2CE" }}
                        hoverHandle="type"
                        onMouseOver={() => hoverHandleOver("type")}
                        onMouseOut={() => hoverHandleOut("type")}
                        onClick={() => this.props.toggleVisibility("type")}
                        x="143.5"
                        y="225.8"
                        class="st1"
                        width="11.9"
                        height="2.9"
                      />
                    </g>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path
                        style={{ fill: "#FFFFFF" }}
                        d="M122.4,259.7l-19.7,11v22l19.7,11l19.5-11v-22L122.4,259.7z M126.5,289c-14.8,0-14.8-23,0-23
                C141.4,266,141.3,289,126.5,289z"
                      />
                      <path
                        style={{ fill: "#D7D2CE" }}
                        hoverHandle="reading"
                        onMouseOver={() => hoverHandleOver("reading")}
                        onMouseOut={() => hoverHandleOut("reading")}
                        onClick={() => this.props.toggleVisibility("reading")}
                        d="M122.4,305.3l-21.2-11.9v-23.6l21.2-11.9l21.2,11.9v23.6L122.4,305.3z M104.2,291.8l18.2,10.1l18.2-10.1
                v-20.4l-18.2-10.1l-18.2,10.1V291.8z"
                      />
                    </g>
                    <g>
                      <path
                        style={{ fill: "none" }}
                        d="M116.7,271.8c-2.4,1.1-4,3.5-4,6.2c0,3,2,5.6,4.9,6.5C115,280.9,114.8,275.8,116.7,271.8z"
                      />
                    </g>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <polygon
                        style={{ fill: "#FFFFFF" }}
                        points="158,271.2 177.7,260.2 197.2,271.2 197.2,293.2 177.7,304.2 158,293.2 							"
                      />
                      <path
                        style={{ fill: "#D7D2CE" }}
                        hoverHandle="meaning"
                        onMouseOver={() => hoverHandleOver("meaning")}
                        onMouseOut={() => hoverHandleOut("meaning")}
                        onClick={() => this.props.toggleVisibility("meaning")}
                        d="M177.7,306l-21.2-11.9v-23.6l21.2-11.9l21.2,11.9v23.6L177.7,306z M159.5,292.5l18.2,10.1l18.2-10.1
                v-20.4L177.7,262l-18.2,10.1V292.5z"
                      />
                    </g>
                    <g>
                      <path
                        style={{ fill: "none" }}
                        d="M171.1,280.8c-0.1,1.3-0.1,2.4,0.4,3.5l2.9-4.1C173.3,280.4,172.2,280.6,171.1,280.8z"
                      />
                      <path
                        style={{ fill: "none" }}
                        d="M178.8,279l-5,7c0.6,0,1.3-0.1,2-0.2l5.1-7.1C180.3,278.7,179.6,278.8,178.8,279z"
                      />
                      <path
                        style={{ fill: "none" }}
                        d="M183.6,279.8l-3.4,4.7c1.3-0.4,2.6-0.7,3.9-0.9C184.3,282.3,184.3,281,183.6,279.8z"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g>
          <line
            style={{
              fill: "#FFFFFF",
              stroke: "#FFFFFF",
              "stroke-width": 4,
              "stroke-miterlimit": 10
            }}
            x1="34.364"
            y1="208.95"
            x2="74.182"
            y2="208.95"
          />
          <line
            style={{
              fill: "#FFFFFF",
              stroke: "#FFFFFF",
              "stroke-width": 4,
              "stroke-miterlimit": 10
            }}
            x1="34.364"
            y1="215.55"
            x2="74.182"
            y2="215.55"
          />

          <line
            style={{
              fill: "#FFFFFF",
              stroke: "#FFFFFF",
              "stroke-width": 4,
              "stroke-miterlimit": 10
            }}
            x1="34.364"
            y1="222.15"
            x2="62.727"
            y2="222.15"
          />

          <line
            style={{
              fill: "#FFFFFF",
              stroke: "#FFFFFF",
              "stroke-width": 4,
              "stroke-miterlimit": 10
            }}
            x1="34.364"
            y1="228.95"
            x2="68.182"
            y2="228.95"
          />
        </g>
        <path
          style={{ fill: "#D7D2CE" }}
          hoverHandle="meaning"
          onMouseOver={() => hoverHandleOver("meaning")}
          onMouseOut={() => hoverHandleOut("meaning")}
          onClick={() => this.props.toggleVisibility("meaning")}
          d="M180.8,272.9c-1.6,0-3,1.2-3,2.5v5.3c0,1.5,1.2,2.5,3,2.5l-1.5,2.4c-0.1,0.5,0.4,0.4,0.6,0.2l6.2-2.7h4.5
  c1.6,0,2.9-1.1,2.9-2.4v-5.4c0-1.3-1.4-2.5-3-2.5L180.8,272.9L180.8,272.9z M181.8,277c0.6,0,1.2,0.4,1.2,1c0,0.5-0.5,1-1.2,1
  c-0.6,0-1.2-0.4-1.2-1C180.6,277.4,181.2,277,181.8,277z M185.8,277c0.6,0,1.2,0.4,1.2,1c0,0.5-0.5,1-1.2,1s-1.2-0.4-1.2-1
  C184.6,277.4,185.1,277,185.8,277z M189.8,277c0.6,0,1.2,0.4,1.2,1c0,0.5-0.5,1-1.2,1s-1.2-0.4-1.2-1
  C188.6,277.4,189.1,277,189.8,277z M172.7,277.2c-0.4,0-0.8,0.1-1.2,0.3c-0.4,0.2-0.6,0.4-1,0.7c-0.3,0.3-0.6,0.6-0.9,1
  c-0.2,0.3-0.3,0.7-0.4,1c0,0.4-0.1,0.7,0,1.2c0,0.2,0.1,0.3,0.1,0.9c0.1,0.6,0.2,0.7,0.3,1c0.1,0.3,0.2,0.5,0.4,0.8
  c0.3,0.6,0.6,0.7,1,1.2c0.1,0.2-0.1,0.8-0.3,1c-1.1,0.7-4.1,1.5-5.1,1.9c-0.8,0.3-1.3,0.8-1.3,1.8v0.8c0,0.4,0.5,1,1.2,1h15.3
  c0.7,0,1.2-0.6,1.2-1v-0.9c0-1-0.4-1.5-1.3-1.8c-0.3-0.1-1.3-0.4-2.3-0.7c-1.2-0.4-2.5-0.9-2.9-1.1c-0.2-0.1-0.5-0.7-0.3-1
  c0.3-0.6,0.7-0.9,1-1.3c0.3-0.3,0.3-0.5,0.4-0.8c0.1-0.3,0.3-0.4,0.3-1c0.1-0.6,0.1-0.6,0.1-0.9c0.1-0.5,0-0.8,0-1.2
  c-0.1-0.3-0.3-0.7-0.4-1c-0.2-0.4-0.5-0.7-0.9-1c-0.4-0.2-0.5-0.5-1-0.6c-0.4-0.1-0.8-0.2-1.1-0.3
  C173.4,277.2,173.1,277.2,172.7,277.2L172.7,277.2z"
        />
        <g>
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M133.6,272.1h-0.5c0-1,0-1.5,0-1.5c0-0.3-0.2-0.5-0.4-0.5c-6.3,0-10.1,1.6-10.9,2c-0.8-0.4-4.6-2-10.9-2
    c-0.2,0-0.4,0.2-0.4,0.5c0,0,0,0.6,0,1.5h-0.5c-0.7,0-1.3,0.7-1.3,1.5v16.7c0,0.8,0.6,1.5,1.3,1.5h23.7c0.7,0,1.3-0.7,1.3-1.5
    v-16.7C134.9,272.8,134.3,272.1,133.6,272.1z M132.3,288.8c-5.3,0.1-8.8,1.2-10.1,1.8v-17.7c0.9-0.4,4.4-1.8,10.1-1.9
    C132.3,276.8,132.3,286.6,132.3,288.8z M121.3,272.9v17.7c-1.3-0.5-4.8-1.7-10.1-1.8c0-2,0-10.3,0-16.2c0,0,0,0,0,0c0,0,0,0,0,0
    c0-0.5,0-1,0-1.5C116.9,271.1,120.4,272.5,121.3,272.9z M109.4,290.3v-16.7c0-0.3,0.2-0.5,0.5-0.5h0.5c0,1.8,0,4.3,0,6.8
    c0,2.3,0,4.7,0,6.4c0,0.9,0,1.6,0,2.1c0,0.3,0,0.5,0,0.6c0,0.3,0,0.4,0.1,0.5c0.1,0.1,0.2,0.1,0.3,0.1c3.7,0,6.4,0.6,8.3,1.1h-9.2
    C109.7,290.8,109.4,290.6,109.4,290.3z M134.1,290.3c0,0.3-0.2,0.5-0.5,0.5h-9.2c1.8-0.5,4.6-1.1,8.3-1.1c0.1,0,0.2,0,0.3-0.1
    c0.1-0.1,0.1-0.2,0.1-0.5c0-0.1,0-0.3,0-0.6c0-0.5,0-1.2,0-2.1c0-1.8,0-4.1,0-6.4c0-2.5,0-5.1,0-6.8h0.5c0.3,0,0.5,0.2,0.5,0.5
    V290.3L134.1,290.3z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M115.8,274.4c1.5,0.2,2.8,0.5,4,0.9c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.4-0.3c0.1-0.3-0.1-0.5-0.3-0.6
    c-1.3-0.4-2.7-0.7-4.2-1c-0.2,0-0.4,0.1-0.5,0.4S115.6,274.3,115.8,274.4z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M112.6,274.1c0.5,0,0.9,0.1,1.4,0.1c0,0,0,0,0,0c0.2,0,0.4-0.2,0.4-0.4c0-0.3-0.2-0.5-0.4-0.5
    c-0.5,0-0.9-0.1-1.4-0.1c-0.2,0-0.4,0.2-0.4,0.5C112.2,273.8,112.4,274.1,112.6,274.1z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M120.1,278.4c-0.9-0.3-1.8-0.5-2.8-0.7c-0.2,0-0.5,0.1-0.5,0.4s0.1,0.5,0.3,0.5c1,0.2,1.9,0.4,2.7,0.7
    c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.4-0.3C120.4,278.8,120.3,278.5,120.1,278.4z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M112.6,278.1c0.9,0,1.8,0.1,2.7,0.2c0,0,0,0,0.1,0c0.2,0,0.4-0.2,0.4-0.4c0-0.3-0.1-0.5-0.4-0.5
    c-0.9-0.1-1.8-0.2-2.8-0.3c-0.2,0-0.4,0.2-0.4,0.5C112.2,277.9,112.4,278.1,112.6,278.1z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M119.8,277.3c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.4-0.3c0.1-0.3-0.1-0.5-0.3-0.6c-0.3-0.1-0.6-0.2-0.9-0.3
    c-0.2-0.1-0.5,0.1-0.5,0.3s0.1,0.5,0.3,0.6C119.2,277.1,119.5,277.2,119.8,277.3z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M112.6,276.1c1.6,0.1,3.1,0.3,4.5,0.5c0,0,0.1,0,0.1,0c0.2,0,0.4-0.2,0.4-0.4c0-0.3-0.1-0.5-0.3-0.5
    c-1.5-0.3-3-0.5-4.6-0.6c-0.2,0-0.4,0.2-0.4,0.5C112.2,275.9,112.4,276.1,112.6,276.1z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M120.1,280.5c-1.4-0.5-3-0.8-4.6-1c-0.2,0-0.4,0.2-0.5,0.4c0,0.3,0.1,0.5,0.4,0.5c1.6,0.2,3.1,0.6,4.5,1
    c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.4-0.3C120.4,280.8,120.3,280.5,120.1,280.5z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M112.6,280.1c0.3,0,0.6,0,0.9,0.1c0,0,0,0,0,0c0.2,0,0.4-0.2,0.4-0.4c0-0.3-0.2-0.5-0.4-0.5
    c-0.3,0-0.6,0-0.9-0.1c-0.2,0-0.4,0.2-0.4,0.5S112.4,280.1,112.6,280.1z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M120.1,284.5c-0.9-0.3-1.8-0.5-2.8-0.7c-0.2,0-0.5,0.1-0.5,0.4s0.1,0.5,0.3,0.5c1,0.2,1.9,0.4,2.7,0.7
    c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.4-0.3C120.4,284.8,120.3,284.6,120.1,284.5z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M112.6,284.2c0.9,0,1.8,0.1,2.7,0.2c0,0,0,0,0.1,0c0.2,0,0.4-0.2,0.4-0.4c0-0.3-0.1-0.5-0.4-0.5
    c-0.9-0.1-1.8-0.2-2.8-0.3c-0.2,0-0.4,0.2-0.4,0.5C112.2,283.9,112.4,284.2,112.6,284.2z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M120.1,286.5c-1.4-0.5-3-0.8-4.6-1c-0.2,0-0.4,0.2-0.5,0.4c0,0.3,0.1,0.5,0.4,0.5c1.6,0.2,3.1,0.6,4.5,1
    c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.4-0.3C120.4,286.9,120.3,286.6,120.1,286.5z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M112.6,286.2c0.3,0,0.6,0,0.9,0.1c0,0,0,0,0,0c0.2,0,0.4-0.2,0.4-0.4c0-0.3-0.2-0.5-0.4-0.5
    c-0.3,0-0.6,0-0.9-0.1c-0.2,0-0.4,0.2-0.4,0.5C112.2,286,112.4,286.2,112.6,286.2z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M119.8,283.4c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.4-0.3c0.1-0.3-0.1-0.5-0.3-0.6c-0.3-0.1-0.6-0.2-0.9-0.3
    c-0.2-0.1-0.5,0.1-0.5,0.3s0.1,0.5,0.3,0.6C119.2,283.2,119.5,283.3,119.8,283.4z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M112.6,282.1c1.6,0.1,3.1,0.3,4.5,0.5c0,0,0.1,0,0.1,0c0.2,0,0.4-0.2,0.4-0.4c0-0.3-0.1-0.5-0.3-0.5
    c-1.5-0.3-3-0.5-4.6-0.6c-0.2,0-0.4,0.2-0.4,0.5C112.2,281.9,112.4,282.1,112.6,282.1z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M123.6,275.3c0,0,0.1,0,0.1,0c1.2-0.4,2.6-0.7,4-0.9c0.2,0,0.4-0.3,0.4-0.5c0-0.3-0.2-0.4-0.5-0.4
    c-1.5,0.2-2.9,0.5-4.2,1c-0.2,0.1-0.4,0.3-0.3,0.6C123.2,275.2,123.4,275.3,123.6,275.3z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M129.5,274.2C129.5,274.2,129.5,274.2,129.5,274.2c0.5,0,0.9-0.1,1.4-0.1c0.2,0,0.4-0.2,0.4-0.5
    s-0.2-0.5-0.4-0.5c-0.5,0-0.9,0.1-1.4,0.1c-0.2,0-0.4,0.3-0.4,0.5C129.1,274,129.3,274.2,129.5,274.2z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M123.6,279.4c0,0,0.1,0,0.1,0c0.8-0.3,1.7-0.5,2.7-0.7c0.2,0,0.4-0.3,0.3-0.5s-0.3-0.4-0.5-0.4
    c-1,0.2-1.9,0.4-2.8,0.7c-0.2,0.1-0.4,0.3-0.3,0.6C123.2,279.2,123.4,279.4,123.6,279.4z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M130.9,277.2c-0.9,0-1.9,0.1-2.8,0.3c-0.2,0-0.4,0.3-0.4,0.5c0,0.2,0.2,0.4,0.4,0.4c0,0,0,0,0.1,0
    c0.9-0.1,1.8-0.2,2.7-0.2c0.2,0,0.4-0.2,0.4-0.5C131.3,277.4,131.1,277.1,130.9,277.2z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M123.6,277.3c0,0,0.1,0,0.1,0c0.3-0.1,0.6-0.2,0.9-0.3c0.2-0.1,0.4-0.3,0.3-0.6s-0.3-0.4-0.5-0.3
    c-0.3,0.1-0.6,0.2-0.9,0.3c-0.2,0.1-0.4,0.3-0.3,0.6C123.2,277.2,123.4,277.3,123.6,277.3z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M130.9,275.1c-1.6,0.1-3.2,0.3-4.6,0.6c-0.2,0-0.4,0.3-0.3,0.5c0,0.2,0.2,0.4,0.4,0.4c0,0,0.1,0,0.1,0
    c1.4-0.3,2.9-0.5,4.5-0.5c0.2,0,0.4-0.2,0.4-0.5C131.3,275.3,131.1,275.1,130.9,275.1z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M123.6,281.4c0,0,0.1,0,0.1,0c1.4-0.4,2.9-0.8,4.5-1c0.2,0,0.4-0.3,0.4-0.5s-0.2-0.4-0.5-0.4
    c-1.7,0.2-3.2,0.6-4.6,1c-0.2,0.1-0.4,0.3-0.3,0.6C123.2,281.3,123.4,281.4,123.6,281.4z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M130.9,279.2c-0.3,0-0.6,0-0.9,0.1c-0.2,0-0.4,0.2-0.4,0.5c0,0.3,0.2,0.4,0.4,0.4c0,0,0,0,0,0
    c0.3,0,0.6,0,0.9-0.1c0.2,0,0.4-0.2,0.4-0.5C131.3,279.4,131.1,279.2,130.9,279.2z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M123.2,285.1c0.1,0.2,0.2,0.3,0.4,0.3c0,0,0.1,0,0.1,0c0.8-0.3,1.7-0.5,2.7-0.7c0.2,0,0.4-0.3,0.3-0.5
    s-0.3-0.4-0.5-0.4c-1,0.2-1.9,0.4-2.8,0.7C123.2,284.6,123.1,284.8,123.2,285.1z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M130.9,283.2c-0.9,0-1.9,0.1-2.8,0.3c-0.2,0-0.4,0.3-0.4,0.5c0,0.2,0.2,0.4,0.4,0.4c0,0,0,0,0.1,0
    c0.9-0.1,1.8-0.2,2.7-0.2c0.2,0,0.4-0.2,0.4-0.5C131.3,283.4,131.1,283.2,130.9,283.2z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M128.1,285.5c-1.7,0.2-3.2,0.6-4.6,1c-0.2,0.1-0.4,0.3-0.3,0.6c0.1,0.2,0.2,0.3,0.4,0.3c0,0,0.1,0,0.1,0
    c1.4-0.4,2.9-0.8,4.5-1c0.2,0,0.4-0.3,0.4-0.5C128.5,285.6,128.3,285.5,128.1,285.5z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M130.9,285.2c-0.3,0-0.6,0-0.9,0.1c-0.2,0-0.4,0.2-0.4,0.5c0,0.3,0.2,0.4,0.4,0.4c0,0,0,0,0,0
    c0.3,0,0.6,0,0.9-0.1c0.2,0,0.4-0.2,0.4-0.5S131.1,285.2,130.9,285.2z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M123.6,283.4c0,0,0.1,0,0.1,0c0.3-0.1,0.6-0.2,0.9-0.3c0.2-0.1,0.4-0.3,0.3-0.6s-0.3-0.4-0.5-0.3
    c-0.3,0.1-0.6,0.2-0.9,0.3c-0.2,0.1-0.4,0.3-0.3,0.6C123.2,283.3,123.4,283.4,123.6,283.4z"
          />
          <path
            style={{ fill: "#D7D2CE" }}
            hoverHandle="reading"
            onMouseOver={() => hoverHandleOver("reading")}
            onMouseOut={() => hoverHandleOut("reading")}
            onClick={() => this.props.toggleVisibility("reading")}
            d="M130.9,281.2c-1.6,0.1-3.2,0.3-4.6,0.6c-0.2,0-0.4,0.3-0.3,0.5c0,0.2,0.2,0.4,0.4,0.4c0,0,0.1,0,0.1,0
    c1.4-0.3,2.9-0.5,4.5-0.5c0.2,0,0.4-0.2,0.4-0.5C131.3,281.4,131.1,281.2,130.9,281.2z"
          />
        </g>
        <g>
          <g>
            <g>
              <g>
                <path
                  id="a2D4bkXr"
                  class="st1"
                  d="M372.3,256.3l-70.8,39.3l-70.8-39.3v-78.6l70.8-39.3l70.8,39.3V256.3z M233.7,254.7
          l67.8,37.6l67.8-37.6v-75.3l-67.8-37.6l-67.8,37.6V254.7z"
                />
              </g>
              <g>
                <g>
                  <path
                    class="st4"
                    d="M372.3,256.3l-70.8,39.3l-70.8-39.3v-78.6l70.8-39.3l70.8,39.3V256.3z M233.7,254.7l67.8,37.6l67.8-37.6
            v-75.3l-67.8-37.6l-67.8,37.6V254.7z"
                  />
                </g>
              </g>
            </g>
            <g>
              <g>
                <path
                  id="c1eUQovJXP"
                  class="st5"
                  d="M306.9,226.6c-2.5,1.7-3.5,5.3-2.2,8"
                />
              </g>
              <g>
                <g>
                  <path class="st4" d="M306.9,226.6c-2.5,1.7-3.5,5.3-2.2,8" />
                </g>
              </g>
            </g>
            <g>
              <g>
                <path
                  id="c23nM4mvub"
                  class="st5"
                  d="M308.6,224.6c-0.5,1.9-0.4,3.9,0.1,5.8"
                />
              </g>
              <g>
                <g>
                  <path class="st4" d="M308.6,224.6c-0.5,1.9-0.4,3.9,0.1,5.8" />
                </g>
              </g>
            </g>
            <g>
              <g>
                <path
                  id="a17is7fzy"
                  style={{ fill: "#D7D2CE" }}
                  hoverHandle="type"
                  onMouseOver={() => hoverHandleOver("type")}
                  onMouseOut={() => hoverHandleOut("type")}
                  onClick={() => this.props.toggleVisibility("type")}
                  d="M400.8,219.4c0,52.5-43.2,95.1-96.4,95.1c-53.2,0-96.4-42.6-96.4-95.1s43.2-95.1,96.4-95.1
          C357.6,124.3,400.8,166.9,400.8,219.4z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  id="a1I7cUhWkw"
                  style={{ fill: "#FFFFFF" }}
                  d="M305.6,143.1l70.8,37.7v75.4l-70.8,37.7l-70.8-37.7v-75.4L305.6,143.1z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  id="b3hvSVgT6G"
                  style={{ fill: "#D7D2CE" }}
                  hoverHandle="radicals"
                  onMouseOver={() => hoverHandleOver("radicals")}
                  onMouseOut={() => hoverHandleOut("radicals")}
                  onClick={() => this.props.toggleVisibility("radicals")}
                  d="M290.1,241.4c2.2,0,4.3-2,4.2-4.3c-0.1-2.3-1.8-4.3-4.2-4.3c-2.1,0-4.2,0-6.3,0
          c-2.2,0-4.3,2-4.2,4.3c0.1,2.3,1.8,4.3,4.2,4.3l0,0C286.6,241.4,288.7,241.4,290.1,241.4z"
                />
              </g>
              <g>
                <g>
                  <path
                    style={{ fill: "#D7D2CE" }}
                    hoverHandle="radicals"
                    onMouseOver={() => hoverHandleOver("radicals")}
                    onMouseOut={() => hoverHandleOut("radicals")}
                    onClick={() => this.props.toggleVisibility("radicals")}
                    d="M290.1,241.4c2.2,0,4.3-2,4.2-4.3c-0.1-2.3-1.8-4.3-4.2-4.3c-2.1,0-4.2,0-6.3,0c-2.2,0-4.3,2-4.2,4.3
            c0.1,2.3,1.8,4.3,4.2,4.3l0,0C286.6,241.4,288.7,241.4,290.1,241.4z"
                  />
                </g>
              </g>
            </g>
            <g>
              <g>
                <path
                  id="c3yVtXqxBh"
                  style={{ fill: "#D7D2CE" }}
                  hoverHandle="stroke"
                  onMouseOver={() => hoverHandleOver("stroke")}
                  onMouseOut={() => hoverHandleOut("stroke")}
                  onClick={() => this.props.toggleVisibility("stroke")}
                  d="M267.4,190.5c15.1,0,30.2-0.1,45.3-0.1c8,0,16-0.1,23.9-0.1c1.7,0,8.7-0.9,9.6,0
          c0.6,0.6,0,4.3,0,5.3c0,2.4,0,4.7,0,7.2c0,5,8,5.1,8,0.1c0-5.6,2.5-17.8-4.8-20.2c-3.2-1.1-7.5-0.4-10.9-0.4
          c-5.1,0-10.2,0-15.3,0.1c-4.4,0-8.8,0-13.3,0c0-0.3,0-0.6,0-0.9c0-0.4-0.1-0.7-0.2-1.1c0-0.1,0-0.2,0-0.3c0.1-0.3,0.2-0.7,0.2-1
          c0-1.4,0-2.7,0-4.1c0-2.1-1.8-4.1-4-4c-2.2,0.1-4,1.7-4,4c0,1.4,0,2.7,0,4.1c0,0.3,0.1,0.7,0.1,1c0,0.1,0,0.2,0,0.4
          c-0.1,0.4-0.2,0.7-0.2,1.1c0,0.3,0,0.7,0,1c-10.8,0-21.8,0.6-32.6,0.1c-5.8-0.3-9.2-1.6-10,5.3c-0.6,5-0.1,10.2-0.1,15.1
          c0.1,4.8,8.1,4.8,8.2-0.2C267.3,198.9,267.4,194.6,267.4,190.5z"
                />
              </g>
              <g>
                <g>
                  <path
                    style={{ fill: "#D7D2CE" }}
                    hoverHandle="stroke"
                    onMouseOver={() => hoverHandleOver("stroke")}
                    onMouseOut={() => hoverHandleOut("stroke")}
                    onClick={() => this.props.toggleVisibility("stroke")}
                    d="M267.4,190.5c15.1,0,30.2-0.1,45.3-0.1c8,0,16-0.1,23.9-0.1c1.7,0,8.7-0.9,9.6,0c0.6,0.6,0,4.3,0,5.3
            c0,2.4,0,4.7,0,7.2c0,5,8,5.1,8,0.1c0-5.6,2.5-17.8-4.8-20.2c-3.2-1.1-7.5-0.4-10.9-0.4c-5.1,0-10.2,0-15.3,0.1
            c-4.4,0-8.8,0-13.3,0c0-0.3,0-0.6,0-0.9c0-0.4-0.1-0.7-0.2-1.1c0-0.1,0-0.2,0-0.3c0.1-0.3,0.2-0.7,0.2-1c0-1.4,0-2.7,0-4.1
            c0-2.1-1.8-4.1-4-4c-2.2,0.1-4,1.7-4,4c0,1.4,0,2.7,0,4.1c0,0.3,0.1,0.7,0.1,1c0,0.1,0,0.2,0,0.4c-0.1,0.4-0.2,0.7-0.2,1.1
            c0,0.3,0,0.7,0,1c-10.8,0-21.8,0.6-32.6,0.1c-5.8-0.3-9.2-1.6-10,5.3c-0.6,5-0.1,10.2-0.1,15.1c0.1,4.8,8.1,4.8,8.2-0.2
            C267.3,198.9,267.4,194.6,267.4,190.5z"
                  />
                </g>
              </g>
            </g>
            <g>
              <g>
                <path
                  id="e82ugMa5sl"
                  style={{ fill: "#D7D2CE" }}
                  hoverHandle="radicals"
                  onMouseOver={() => hoverHandleOver("radicals")}
                  onMouseOut={() => hoverHandleOut("radicals")}
                  onClick={() => this.props.toggleVisibility("radicals")}
                  d="M295.2,241.2c-0.4-2.7-0.8-5.4-1.2-8.2c-1.2,0.2-2.4,0.1-3.5,0c0,2.8,0,5.5,0,8.3
          c14-0.1,28.1-0.2,42.1-0.2c5.7,0,5.7-8.3,0-8.3c-14,0.1-28.1,0.2-42.1,0.2c-5.8,0-5.6,7.8,0,8.3c2.1,0.2,3.9,0,5.9-0.2
          c5-0.7,3.7-8.2-1.2-8.2c-0.9,0-1.8,0-2.8,0c-5.7,0-5.7,8.3,0,8.3l0,0C293.7,241.2,294.6,241.2,295.2,241.2z"
                />
              </g>
              <g>
                <g>
                  <path
                    style={{ fill: "#D7D2CE" }}
                    hoverHandle="radicals"
                    onMouseOver={() => hoverHandleOver("radicals")}
                    onMouseOut={() => hoverHandleOut("radicals")}
                    onClick={() => this.props.toggleVisibility("radicals")}
                    d="M295.2,241.2c-0.4-2.7-0.8-5.4-1.2-8.2c-1.2,0.2-2.4,0.1-3.5,0c0,2.8,0,5.5,0,8.3
            c14-0.1,28.1-0.2,42.1-0.2c5.7,0,5.7-8.3,0-8.3c-14,0.1-28.1,0.2-42.1,0.2c-5.8,0-5.6,7.8,0,8.3c2.1,0.2,3.9,0,5.9-0.2
            c5-0.7,3.7-8.2-1.2-8.2c-0.9,0-1.8,0-2.8,0c-5.7,0-5.7,8.3,0,8.3l0,0C293.7,241.2,294.6,241.2,295.2,241.2z"
                  />
                </g>
              </g>
            </g>
            <g>
              <g>
                <path
                  id="bW8Mz4pn1"
                  style={{ fill: "#D7D2CE" }}
                  hoverHandle="radicals"
                  onMouseOver={() => hoverHandleOver("radicals")}
                  onMouseOut={() => hoverHandleOut("radicals")}
                  onClick={() => this.props.toggleVisibility("radicals")}
                  d="M311,209.2c3.9,0,7.8,0,11.6-0.1c3.6,0,9-1,12.4,0c-1-1-2-1.9-2.9-2.9
          c-0.4-1.4-0.8,0.3-1.6,1.2c-0.9,1-1.9,1.9-3,2.8c-2.4,2-5,3.9-7.5,5.7c-4.4,3.2-9.8,6-13.7,9.7c-3.3,3.2-2.7,8.7-3,12.8
          c-0.3,6.9-0.4,13.7-0.1,20.6c0.2,5.3,8.6,5.4,8.4,0c-0.2-5.9-0.2-11.8,0-17.6c0.1-2.5-0.4-6.4,0.5-8.8c0.7-2,2.9-3,4.8-4.3
          c4.2-3,8.4-6,12.5-9.1c3.8-2.9,7.9-5.8,10-10.3c4.9-10.5-11.1-8.2-16.9-8.1c-12,0.1-23.9,0.1-35.9,0.2c-5.4,0-5.4,8.3,0,8.3l0,0
          C297.6,209.3,305.6,209.2,311,209.2z"
                />
              </g>
              <g>
                <g>
                  <path
                    style={{ fill: "#D7D2CE" }}
                    hoverHandle="radicals"
                    onMouseOver={() => hoverHandleOver("radicals")}
                    onMouseOut={() => hoverHandleOut("radicals")}
                    onClick={() => this.props.toggleVisibility("radicals")}
                    d="M311,209.2c3.9,0,7.8,0,11.6-0.1c3.6,0,9-1,12.4,0c-1-1-2-1.9-2.9-2.9c-0.4-1.4-0.8,0.3-1.6,1.2
            c-0.9,1-1.9,1.9-3,2.8c-2.4,2-5,3.9-7.5,5.7c-4.4,3.2-9.8,6-13.7,9.7c-3.3,3.2-2.7,8.7-3,12.8c-0.3,6.9-0.4,13.7-0.1,20.6
            c0.2,5.3,8.6,5.4,8.4,0c-0.2-5.9-0.2-11.8,0-17.6c0.1-2.5-0.4-6.4,0.5-8.8c0.7-2,2.9-3,4.8-4.3c4.2-3,8.4-6,12.5-9.1
            c3.8-2.9,7.9-5.8,10-10.3c4.9-10.5-11.1-8.2-16.9-8.1c-12,0.1-23.9,0.1-35.9,0.2c-5.4,0-5.4,8.3,0,8.3l0,0
            C297.6,209.3,305.6,209.2,311,209.2z"
                  />
                </g>
              </g>
            </g>
            <g>
              <g>
                <path
                  id="b1U84IIXo0"
                  style={{ fill: "#D7D2CE" }}
                  hoverHandle="radicals"
                  onMouseOver={() => hoverHandleOver("radicals")}
                  onMouseOut={() => hoverHandleOut("radicals")}
                  onClick={() => this.props.toggleVisibility("radicals")}
                  d="M279.8,201c-2.4,0-4.6,1.9-4.5,4.2c0.1,2.2,2,4.2,4.5,4.2c1.5,0,2.9,0,4.4,0
          c2.4,0,4.6-1.9,4.5-4.2c-0.1-2.3-2-4.2-4.5-4.2l0,0C282.2,201,280.7,201,279.8,201z"
                />
              </g>
              <g>
                <g>
                  <path
                    style={{ fill: "#D7D2CE" }}
                    hoverHandle="radicals"
                    onMouseOver={() => hoverHandleOver("radicals")}
                    onMouseOut={() => hoverHandleOut("radicals")}
                    onClick={() => this.props.toggleVisibility("radicals")}
                    d="M279.8,201c-2.4,0-4.6,1.9-4.5,4.2c0.1,2.2,2,4.2,4.5,4.2c1.5,0,2.9,0,4.4,0c2.4,0,4.6-1.9,4.5-4.2
            c-0.1-2.3-2-4.2-4.5-4.2l0,0C282.2,201,280.7,201,279.8,201z"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g>
          <g>
            <path
              style={{ fill: "#D7D2CE" }}
              hoverHandle="materials"
              onMouseOver={() => hoverHandleOver("materials")}
              onMouseOut={() => hoverHandleOut("materials")}
              onClick={() => this.props.toggleVisibility("materials")}
              d="M506,176.3c-0.2-1.3-0.2-3.6,1.1-4.4c0,0,0,0,0.1-0.1c1.1-0.3,1.8-0.8,1.2-1.4l-15.6-4.5l-25.2,3.3
      c0,0-2.9,0.4-2.6,4.7c0.1,2.3,0.9,3.5,1.6,4l-2.1,0.6c-0.6,0.6,0.2,1.1,1.2,1.4c0,0,0,0,0.1,0.1c1.3,0.8,1.3,3,1.1,4.4
      c-4.6,1.3-3,1.7-3,1.7l1,0.2c-0.7,0.6-1.4,1.8-1.3,4c0.3,4.3,2.6,4.6,2.6,4.6l16.5,5.1l24.9-5.7c0,0,1.7-0.4-3-1.7
      c-0.2-1.3-0.2-3.6,1.1-4.4c0,0,0,0,0.1-0.1c1.1-0.3,1.8-0.8,1.2-1.4l-1.1-0.3c0.7-0.4,1.8-1.5,2-4.3c0.1-1.9-0.4-3.1-1-3.7
      l2.1-0.5C509,178,510.6,177.6,506,176.3z M485.2,176.3l4.2-0.8l14.2-2.8l2.1-0.4c-0.7,1.2-0.6,2.8-0.5,3.8c0,0.2,0.1,0.4,0.1,0.6
      l-2.3,0.5l-17.9,4.2L485.2,176.3z M467.2,180.4l2.1,0.4l13.6,2.7l1.2,0.2l0,0l0,0l3.6,0.7l0.2,5.2l-18.4-4.4l-1.8-0.4
      c0-0.2,0.1-0.4,0.1-0.6C467.8,183.2,467.9,181.6,467.2,180.4z M466.4,173.8c0-1.1,0.2-2,0.6-2.4c0.3-0.3,0.6-0.3,0.8-0.3
      c0.1,0,0.2,0,0.2,0l10.9,3.4l5.4,1.7l-0.2,5.2l-15.2-4.1l-0.8-0.2c0,0-0.1,0-0.1,0C467.9,177.2,466.4,177,466.4,173.8z
       M482.7,197.8l-16-4.3c0,0-0.1,0-0.1,0c-0.1,0-1.6-0.1-1.6-3.3c0-1.1,0.2-2,0.6-2.4c0.3-0.3,0.6-0.3,0.8-0.3c0.1,0,0.2,0,0.2,0
      c0,0,0,0,0,0l16.3,5.1L482.7,197.8z M503.7,192.4c0,0.2,0.1,0.4,0.1,0.6l-20.2,4.8l0.2-5.2l4.3-0.8l0.6,0.1l2.4-0.7l11-2.2
      l2.1-0.4C503.6,189.8,503.6,191.4,503.7,192.4z M504.8,185.3c0,0-0.1,0-0.1,0l-1.5,0.4l-14.5,3.9l-0.2-5.2l4.8-1.5l11.5-3.6
      c0,0,0.6-0.1,1,0.3c0.4,0.4,0.6,1.2,0.6,2.4C506.4,185.2,504.9,185.3,504.8,185.3z"
            />
          </g>
        </g>
      </svg>
    );
  }
}

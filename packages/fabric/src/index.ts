import { readFileSync } from "node:fs";
import * as htmlparser2 from "htmlparser2";
import { optimize } from "svgo";
import { NodeWithChildren } from "domhandler/lib/node";

const path = "./assets/test/5fa37930-3759-11ee-80c7-37d09d9cfd15.svg";
const svgText = readFileSync(
  "./assets/test/5fa37930-3759-11ee-80c7-37d09d9cfd15.svg",
  "utf8",
).replace(/>(\s*|\n|\t|\r)</gim, "><");
const optSvg = optimize(svgText, { path });

const astTree = htmlparser2.parseDocument(optSvg.data);

const fabric: any = {
  type: "root",
  children: [],
};

function patch(old: NodeWithChildren, tree: any) {}
patch(astTree, fabric);

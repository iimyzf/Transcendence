import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Apollo from "../assets/Apollo.jpg";
import React from "react";
import Chart from "react-apexcharts";

const ViewProfile = () => {
    const [chartOptions, setChartOptions] = React.useState({});
    const [chartSeries, setChartSeries] = React.useState<
        { name: string; data: number[] }[]
    >([]);

    React.useEffect(() => {
        setChartOptions({
            stroke: {
                show: true,
                curve: "straight",
                // lineCap: "butt",
                colors: ["red", "green", "blue", "yellow"],
                width: 2,
            },
            theme: {
                mode: "dark",
            },
            colors: ["red", "green", "blue", "yellow"],
            chart: {
                id: "basic-bar",
                foreColor: "gray",
                toolbar: {
                    offsetX: -10,
                    offsetY: -60,
                },
            },
            xaxis: {
                categories: [
                    "7 / 15",
                    "7 / 16",
                    "7 / 17",
                    "7 / 18",
                    "7 / 19",
                    "7 / 20",
                    "7 / 21",
                    "7 / 22",
                    "7 / 23",
                    "7 / 24",
                ],
            },
        });

        setChartSeries([
            {
                name: "LOSSES",
                data: [1, 3, 2, 1, 1, 6, 2, 3, 4],
            },
            {
                name: "WINS",
                data: [4, 7, 2, 4, 7, 12, 3, 6, 15],
            },
            {
                name: "DRAWS",
                data: [2, 1, 3, 4, 7, 9, 5, 5, 2],
            },
            {
                name: "DRAWS",
                data: [2, 1, 7, 4, 2, 3, 5, 1, 2],
            },
        ]);
    }, []);

    return (
        <div className="parent flex justify-center items-center">
            <div className="child-container-1 pr-3">
                <div className="container-1 font-satoshi text-white w-[20em] h-[55em] flex flex-col justify-center items-center relative">
                    <div className="img-holder absolute top-[8em]">
                        <img
                            className="w-[8em] h-[8em] rounded-full"
                            src={Apollo}
                            alt="Apollo"
                        />
                        <span className="status rounded-full bg-green-400 w-[1.8em] h-[1.8em] absolute top-1 right-1"></span>
                    </div>
                    <h4 className="font-light absolute top-[18em]">
                        @USERNAME
                    </h4>
                    <h3 className="font-bold absolute top-[19.5em]">
                        MAMELLA INDUSTRY
                    </h3>
                    <div className="bio flex absolute top-[22em] justify-center items-start">
                        <p className="font-light w-[16em] leading-5 text-ellipsis text-start">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quas, quis quae nulla optio suscipit libero
                            excepturi omnis cum, quidem cupiditate
                            asperioresodio quam! Distinctio nesciunt soluta quam
                            quas accusamus minus? Lorem ipsum dolor sit amet
                            consectetured
                        </p>
                    </div>
                    <ul className="flex gap-5 absolute bottom-20">
                        <li>
                            <a href="#">
                                <BsGithub />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <BsInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="child-container-2 pl-3">
                <div className="container-2 font-satoshi text-white w-[80em] h-[55em] flex flex-col justify-center items-center relative">
                    <div className="editable absolute left-20 top-20">
                        <h3 className="pb-3 uppercase">
                            Match Statistics for Username
                        </h3>
                    </div>
                    <Chart
                        className="chart flex justify-center w-[70em] absolute bottom-6"
                        options={chartOptions}
                        series={chartSeries}
                        type="area"
                        // height={400}
                        // width="1000"
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;

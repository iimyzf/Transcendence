import "./Profile.css";
import { BsGithub, BsInstagram, BsLinkedin, BsCheck } from "react-icons/bs";

const Profile = () => {
    return (
        <div className="parent flex justify-center items-center">
            <div className="child-container-1 pr-3">
                <div className="container-1 font-satoshi text-white w-[20em] h-[55em] flex flex-col justify-center items-center relative">
                    <div className="img-holder absolute top-[8em]">
                        <img
                            className="w-[8em] h-[8em] rounded-full"
                            src="https://cdna.artstation.com/p/assets/images/images/054/000/524/large/fall-fox-collection-solar-gods.jpg?1663539057"
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
                        <p className="font-light w-[16em] leading-5 text-ellipsis text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Quas, quis quae nulla optio suscipit libero
                            excepturi omnis cum, quidem cupiditate asperiores
                            odio quam! Distinctio nesciunt soluta quam quas
                            accusamus minus? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Aspernatur fugit
                            praesentium ducimus atque! Reprehenderit
                            exercitationem, saepe iusto ut nulla sit totam
                            repudiandae quia, omnis odio minus numquam nam
                            adipisci assumenda.
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
                <div className="container-2 font-satoshi text-white w-[80em] h-[55em] flex flex-col justify-center items-center">
                    <div className="editable">
                        <h3 className="pb-3">USERNAME</h3>
                        <div className="flex gap-5">
                            <input
                                type="text"
                                maxLength={42}
                                className="w-[65em] h-14 rounded-[12px] input-container outline-none indent-5"
                            />
                            <a href="#">
                                <span className="check-span w-14 h-14 rounded-[12px] flex justify-center items-center">
                                    <BsCheck class="check-icon" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="editable pt-8">
                        <h3 className="pb-3">FULL NAME</h3>
                        <div className="flex gap-5">
                            <input
                                type="text"
                                maxLength={42}
                                className="w-[65em] h-14 rounded-[12px] input-container outline-none indent-5"
                            />
                            <a href="#">
                                <span className="check-span w-14 h-14 rounded-[12px] flex justify-center items-center">
                                    <BsCheck class="check-icon" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="editable pt-8">
                        <h3 className="pb-3">EMAIL ADDRESS</h3>
                        <div className="flex gap-5">
                            <input
                                type="email"
                                maxLength={42}
                                className="w-[65em] h-14 rounded-[12px] input-container outline-none indent-5"
                            />
                            <a href="#">
                                <span className="check-span w-14 h-14 rounded-[12px] flex justify-center items-center">
                                    <BsCheck class="check-icon" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="editable pt-8">
                        <h3 className="pb-3">SOCIAL LINKS</h3>
                        <div className="flex ">
                            <span className="check-span w-[8.6em] h-14 rounded-[12px] mr-5 flex justify-center items-center font-medium uppercase">
                                GitHub
                            </span>
                            <div className="pew flex gap-5">
                                <input
                                    type="link"
                                    className="w-[55em] h-14 rounded-[12px] input-container outline-none indent-5"
                                />
                                <a href="#">
                                    <span className="check-span w-14 h-14 rounded-[12px] flex justify-center items-center">
                                        <BsCheck class="check-icon" />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="flex pt-5">
                            <span className="check-span w-[8.6em] h-14 rounded-[12px] mr-5 flex justify-center items-center font-medium uppercase">
                                LinkedIn
                            </span>
                            <div className="pew flex gap-5">
                                <input
                                    type="link"
                                    className="w-[55em] h-14 rounded-[12px] input-container outline-none indent-5"
                                />
                                <a href="#">
                                    <span className="check-span w-14 h-14 rounded-[12px] flex justify-center items-center">
                                        <BsCheck class="check-icon" />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="flex pt-5">
                            <span className="check-span w-[8.6em] h-14 rounded-[12px] mr-5 flex justify-center items-center font-medium uppercase">
                                Instagram
                            </span>
                            <div className="pew flex gap-5">
                                <input
                                    type="link"
                                    className="w-[55em] h-14 rounded-[12px] input-container outline-none indent-5"
                                />
                                <a href="#">
                                    <span className="check-span w-14 h-14 rounded-[12px] flex justify-center items-center">
                                        <BsCheck class="check-icon" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-12 w-[69em]">
                        <div className="child flex gap-8 justify-end items-end">
                            <h3 className="font-light">
                                <a href="#">CANCEL</a>
                            </h3>
                            <h3 className="font-bold text-xl">
                                <a href="#">SAVE</a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

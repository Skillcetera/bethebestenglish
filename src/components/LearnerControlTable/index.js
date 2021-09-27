import axiosClient from "../../axios/config";
import * as learnerActionCreator from "../../actions/learnerAction";
import { useDispatch } from "react-redux";
export default function LearnerControlTable(props) {
    const { data } = props;
    const dispatch = useDispatch();
    const onHandleRemove = (id) => {
        axiosClient.delete(`/api/learner/${id}`);
        dispatch(learnerActionCreator.deleteLearner(id));
    };
    return (
        <div className="flex flex-col mt-6">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                    ></th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                    >
                                        Phone
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                    >
                                        Course
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                    >
                                        Time
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                    >
                                        Note
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                    >
                                        Options
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((learner, index) => (
                                    <tr>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {index + 1}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {learner.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {learner.email}
                                            </div>
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {learner.phoneNumber}
                                            </div>
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {learner.nameOfCourse}
                                            </div>
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {learner.date}
                                            </div>
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {learner.note}
                                            </div>
                                        </td>
                                        <td className="px-6 py-3 text-sm font-medium text-right whitespace-nowrap">
                                            <button
                                                to="/me/course-form"
                                                className="font-bold text-loginColor "
                                                onClick={() =>
                                                    onHandleRemove(learner._id)
                                                }
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

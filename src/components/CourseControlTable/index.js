import axiosClient from "../../axios/config";

export default function CourseControlTable(props) {
    const { data } = props;
    const onDeleteCourse = (courseName) => {
        axiosClient.delete(`/api/course/${courseName}`);
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
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                    >
                                        Schedule
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
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                    ></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((course) => (
                                    <tr>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {course.name}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {course.schedule}
                                            </div>
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {course.time}
                                            </div>
                                        </td>
                                        <td className="px-6 py-3 whitespace-nowrap">
                                            <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                                Active
                                            </span>
                                        </td>

                                        <td className="px-6 py-3 text-sm font-medium text-right whitespace-nowrap">
                                            <button
                                                className="font-bold text-loginColor "
                                                onClick={() =>
                                                    onDeleteCourse(course.name)
                                                }
                                            >
                                                Delete
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

import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { Fragment, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import config from '~/configs';
import { formDataContent } from '~/configs/const';
import { db } from '~/configs/database';

function List() {
  const [dataForms, setDataForm] = useState<formDataContent[]>([]);

  useEffect(() => {
    const collectionForm = query(collection(db, 'forms'), orderBy('startDate', 'desc'));
    onSnapshot(collectionForm, (data) => {
      if (!data.empty) {
        let form: formDataContent[] = [];
        data.forEach((va: any) => {
          form.push(va.data());
        });
        setDataForm(form);
      }
    });
  }, []);

  return (
    <Fragment>
      <div className="absolute top-[20px] sm:top-[10px] px-[40px] sm:px-[10px] w-full flex justify-between">
        <Link to={config.routes.home}>Quay lại</Link>
        <div className="">Danh sách các biểu mẫu</div>
        <button>Đăng xuất</button>
      </div>
      <div className="w-screen h-screen flex flex-col items-center">
        <div className="w-4/5 flex justify-center mt-[calc(100vh_/_4.2)]">
          <table className="min-w-full text-center text-sm font-light text-surface">
            <thead className="border-b border-neutral-200 bg-neutral-50 font-medium ">
              <tr>
                <th scope="col" className=" px-6 py-4">
                  Số
                </th>
                <th scope="col" className=" px-6 py-4">
                  Tên người thuê vận chuyển
                </th>
                <th scope="col" className=" px-6 py-4">
                  Địa chỉ
                </th>
                <th scope="col" className=" px-6 py-4">
                  Số hợp đồng
                </th>
                <th scope="col" className=" px-6 py-4">
                  Bắt đầu từ
                </th>
                <th scope="col" className=" px-6 py-4">
                  In
                </th>
              </tr>
            </thead>
            <tbody>
              {dataForms.length > 0 &&
                dataForms.map((data: formDataContent, index) => (
                  <tr key={index} className="border-b border-neutral-200">
                    <td className="whitespace-nowrap  px-6 py-4 font-medium">{data.so}</td>
                    <td className="whitespace-nowrap  px-6 py-4 ">{data.tntvc}</td>
                    <td className="whitespace-nowrap  px-6 py-4 ">{data.dcntvc}</td>
                    <td className="whitespace-nowrap  px-6 py-4 ">{data.shd}</td>
                    <td className="whitespace-nowrap  px-6 py-4 ">{new Date(data.startDate).toLocaleDateString()}</td>
                    <td className="whitespace-nowrap  px-6 py-4 ">
                      <Link to={`preview/${encodeURIComponent(data.toString())}`} className="button-19" role="button">
                        Preview
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default List;

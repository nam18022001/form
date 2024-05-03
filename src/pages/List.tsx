import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { Fragment, useEffect, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { Link } from 'react-router-dom';
import config from '~/configs';
import { formDataContent } from '~/configs/const';
import { db } from '~/configs/database';
import { logout } from '~/services/loginService';

function List() {
  const [dataForms, setDataForm] = useState<formDataContent[]>([]);
  const [renderData, setRenderData] = useState<formDataContent[]>([]);
  const [searchValue, setSearchValue] = useState('');

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

  useEffect(() => {
    if (searchValue !== '') {
      const filtered = dataForms.filter((entry) =>
        Object.values(entry).some(
          (val) => typeof val === 'string' && val.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
        ),
      );
      setRenderData(filtered);
    } else {
      setRenderData(dataForms);
    }
  }, [searchValue, dataForms]);

  return (
    <Fragment>
      <div className="absolute top-[20px] sm:top-[10px] px-[40px] sm:px-[10px] w-full flex justify-between ">
        <Link
          to={config.routes.home}
          className="flex justify-center items-center p-[10px_40px] sm:p-[5px_10px] bg-[#1B4242] text-white border-transparent border hover:border-[#1B4242] hover:bg-white hover:text-[#1B4242] rounded-md hover:shadow-lg"
        >
          Quay lại
          <i></i>
        </Link>
        <button
          className="flex justify-center items-center p-[10px_40px] sm:p-[5px_10px] bg-[#EE4266] text-white border-transparent border hover:border-[#EE4266] hover:bg-white hover:text-[#EE4266] rounded-md hover:shadow-lg"
          onClick={async () => await logout()}
        >
          Đăng xuất
        </button>
      </div>
      <div className="sm:text-[16px] mt-[80px] font-bold text-[#6a64f1] text-[25px] mb-[20px] text-ellipsis whitespace-nowrap overflow-hidden flex items-center justify-center ">
        Danh sách các biểu mẫu
      </div>
      <div className="w-full h-full flex flex-col items-center overflow-hidden">
        <div className="w-4/5 md:w-full sm:w-full flex items-center flex-col">
          <div className="w-full flex items-center justify-end relative mb-[5px] sm:px-[5px]">
            <div className=" sm:w-full bg-[#6b64f142] rounded-[8px] mb-[10px] flex items-center px-[10px]">
              <GoSearch className="text-[20px]" />
              <input
                className="bg-transparent p-[10px] focus:outline-none w-full h-full"
                placeholder="Tìm kiếm"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <IoIosCloseCircleOutline
                className={`text-[20px] cursor-pointer ${searchValue.length > 0 ? 'visible' : 'invisible'}`}
                onClick={() => setSearchValue('')}
              />
            </div>
          </div>
          <div className="overflow-y-auto max-h-[calc(100vh_/_1.3)]">
            <table>
              <thead>
                <tr>
                  <th scope="col">Số</th>
                  <th scope="col">Tên người thuê</th>
                  <th scope="col">Địa chỉ người thuê</th>
                  <th scope="col">Số hợp đồng</th>
                  <th scope="col">Bắt đầu từ</th>
                  <th scope="col">Preview</th>
                </tr>
              </thead>
              <tbody>
                {renderData.length > 0 &&
                  renderData.map((data: formDataContent, index) => (
                    <tr key={index} className="border-b border-neutral-200 sm:flex sm:flex-col">
                      <td data-label="Số" scope="row" className="font-medium">
                        {data.so}
                      </td>
                      <td data-label="Tên người thuê">{data.tntvc}</td>
                      <td data-label="Địa chỉ người thuê">{data.dcntvc}</td>
                      <td data-label="Số hợp đồng">{data.shd}</td>
                      <td data-label="Bắt đầu từ">{new Date(data.startDate).toLocaleDateString()}</td>
                      <td data-label="Preview">
                        <Link
                          to={`/preview/${encodeURIComponent(data.so)}`}
                          className="button-19 sm:p-[8px_10px] sm:text-[14px  ]"
                          role="button"
                          state={data}
                        >
                          Preview
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default List;

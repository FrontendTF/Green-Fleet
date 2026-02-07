import { useState } from "react";

type ReportOptions =
  | "This month"
  | "This week"
  | "This year"
  | "This day"
  | "This quartal";

export default function Reports() {
  const [reportOption, setReportOption] = useState<ReportOptions>("This month");
  const timeLabel = reportOption;

  return (
    <section className="flex flex-col gap-5">
      <div className="flex justify-between items-start">
        <h1>Report</h1>
        <select
          className="flex pr-1 border-2 rounded-full text-left text-green-800 font-semibold h-11"
          value={reportOption}
          onChange={(e) => setReportOption(e.target.value as ReportOptions)}
        >
          <option value="This day">This day</option>
          <option value="This week">This week</option>
          <option value="This month">This month</option>
          <option value="This quartal">This quartal</option>
          <option value="This year">This year</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-3 vehiclefilter w-4/5 mx-auto">
        <label htmlFor="type-all">
          <input id="type-all" type="checkbox" name="All" />
          <span>All</span>
        </label>

        <label htmlFor="type-suv">
          <input id="type-suv" type="checkbox" name="SUV" />
          <span>SUV</span>
        </label>

        <label htmlFor="type-cars">
          <input id="type-cars" type="checkbox" name="Cars" />
          <span>Cars</span>
        </label>

        <label htmlFor="type-electro">
          <input id="type-electro" type="checkbox" name="Electro" />
          <span>Electro</span>
        </label>

        <label htmlFor="type-lkw">
          <input id="type-lkw" type="checkbox" name="LKW" />
          <span>LKW</span>
        </label>

        <label htmlFor="type-motorcycle">
          <input id="type-motorcycle" type="checkbox" name="Motorcycle" />
          <span>Motorcycle</span>
        </label>
      </div>
      <div className="grid grid-cols-2 gap-10 reportdivs">
        <div>
          <h2>Total kilometers</h2>
          <p>17,960 km</p>
          <p>{timeLabel}</p>
        </div>
        <div>
          <h2>Total vehicles</h2>
          <p>12</p>
          <p>{timeLabel}</p>
        </div>
        <div>
          <h2>Total used gas</h2>
          <p>848 Liter</p>
          <p>{timeLabel}</p>
        </div>
        <div>
          <h2>Total used kwh</h2>
          <p>1960 kWh</p>
          <p>{timeLabel}</p>
        </div>
        <div>
          <h2>Total Kilometers NV</h2>
          <p>12,480 km</p>
          <p>{timeLabel}</p>
        </div>
        <div>
          <h2>CO2 emissions</h2>
          <p>3.1 t</p>
          <p>{timeLabel}</p>
        </div>
        <div>
          <h2>Total kilometers EV</h2>
          <p>5,480 km</p>
          <p>{timeLabel}</p>
        </div>
        <div>
          <h2>CO2 Savings via EV</h2>
          <p>1.6 t</p>
          <p>{timeLabel}</p>
        </div>
      </div>
    </section>
  );
}

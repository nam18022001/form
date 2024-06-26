import { useLayoutEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import './css.css';

function Preview() {
  const nav = useNavigate();
  const { idProfile } = useParams();
  const { state } = useLocation();

  useLayoutEffect(() => {
    if (Object.keys(state).length === 0 || state === null || state === undefined) {
      nav(-1);
    }
  }, [idProfile, state]);
  const handlePrint = () => {
    window.print();
  };
  return (
    <Fragment>
      <button className="button-print button-30 z-[999] absolute top-[10px] left-[10px]" onClick={handlePrint}>
        Pirnt
      </button>
      <div id="sidebar">
        <div id="outline"></div>
      </div>
      <div id="page-container">
        <div id="pf1" className="pf w0 h0" data-page-no="1">
          <div className="pc pc1 w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42uzawalYMRRDwSi4/5aVCj5ZGF6wMlOCFheOcdr+AgAAgAu/TQAAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAoC1NAAAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACgLU0AAACAtgQAAOAfOyZ4SxIjAAA8p60R0JY4TAAfSeLKAZPHzQjM8ycWAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAADwrWOC5yQxAuDKAQDakittjQAMh6UrB0weNyMwz59YAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAOAtxwTPSWIEwJUDALQlV9oaARgOS1cOmDxuRmCeP7EAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAIBvHRM8J4kRAFcOANCWXGlrBGA4LF05YPK4GYF5/sQCAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC+dUzwnCRGAFw5AEBbcqWtEYDhsHTlgMnjZgTm+RMLAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAIBFxwTPSWIEwJUDALQlV9oaARgOS1cOmDxuRmCeP7EAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAIBvHRM8J4kRAFcOANCWXGlrBGA4LF05YPK4GYF5/sQCAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAAG85JnhOEiMArhwAoC250tYIwHBYunLA5HEzAvP8iQUAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAHzrmOA5SYwAuHIAgLbkSlsjAMNh6coBk8fNCMzzJxYAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAB+dkzwnCRGAFw5AEBbcqWtEYDhsHTlgMnjZgTm+RMLAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAAPzsmeE4SIwCuHACgLbnS1gjAcFi6csDkcTMC8/yJBQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAgJ8dEzwniREAVw4A0JZcaWsEYDgsXTlg8rgZgXn+xAIAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAAbzkmeE4SIwCuHACgLbnS1gjAcFi6csDkcTMC8/yJBQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAOBvjgmek8QIgCsHAGhLrrQ1AjAclq4cMHncjMA8f2IBAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADfOiZ4ThIjAK4cAKAtudLWCMBwWLpywORxMwLz/IkFAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAAB865jgOUmMALhyAIC25EpbIwDDYenKAZPHzQjM8ycWAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAADwrWOC5yQxAuDKAQDakittjQAA8BCvZvwP/IkFAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0B/rRrRycAwzAMBRFk/5XVIQylce9G0IfDgwAAoC0BAADQlgAAAKAtAQAAeNcxwXWSGAEAANCWjLQ1ArBVElcOWHncjMB6/sQCAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAANzrmOA6SYwAuHIAwLde8LZWAAAAYMKfWAAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoS6+rElEAAAAuSURBVAAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAA4FeSGAEAAICpB+nYfw+rn+ufAAAAAElFTkSuQmCC"
            />
            <div className="c x0 y1 w2 h0">
              <div className="t m0 x1 h2 y2 ff1 fs0 fc0 sc0 ls0 ws1">
                GIẤY VẬN TẢI<span className="ff2"> </span>
              </div>
              <div className="t m0 x2 h3 y3 ff3 fs0 fc0 sc0 ls0 ws1">
                Số: {state && state.so ? state.so : ' '} Có giá trị đến &nbsp;
                {state && state.timeout ? state.timeout : '………'}.<span className="ff4"> </span>
              </div>
              <div className="t m0 x3 h3 y4 ff3 fs0 fc0 sc0 ls0 ws1">
                Biển kiểm soát xe: {state && state.bksx ? state.bksx : '……………………………'}
              </div>
            </div>
            <div className="c x3 y5 w3 h4">
              <div className="t m0 x0 h2 y6 ff1 fs0 fc0 sc0 ls0 ws1">
                1. Thông tin về đơn vị kinh doanh
                <span className="ff2"> </span>
              </div>
            </div>
            <div className="c x4 y5 w4 h4">
              <div className="t m0 x0 h2 y6 ff1 fs0 fc0 sc0 ls0 ws1">
                2. Thông tin về người lái xe
                <span className="ff2"> </span>
              </div>
            </div>
            <div className="c x3 y7 w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1 ">
                Đơn vị vận tải: {state && state.dvvt ? state.dvvt : ''}
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 y7 w4 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Họ tên lái xe: {state && state.htlx ? state.htlx : ''}
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x3 y9 w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Địa chỉ: {state && state.dcdvvt ? state.dcdvvt : ''}
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 y9 w4 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Giấy phép lái xe số: {state && state.gplx ? state.gplx : ''}
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x3 ya w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Số điện thoại liên hệ: {state && state.sdtdvvt ? state.sdtdvvt : ''}
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 ya w4 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Số điện thoại liên hệ: {state && state.sdtlx ? state.sdtlx : ''}
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x3 yb w3 h5">
              <div className="t m0 x0 h2 yc ff1 fs0 fc0 sc0 ls0 ws1">
                3. Thông tin về người thuê vận tải
                <span className="ff2"> </span>
              </div>
              <div className="t m0 x0 h3 yd ff3 fs0 fc0 sc0 ls0 ws1">(Dành cho đơn vị kinh doanh vận tải hàng hóa</div>
              <div className="t m0 x0 h6 y8 ff4 fs0 fc0 sc0 ls0 ws1">kê khai)</div>
            </div>
            <div className="c x4 yb w4 h5">
              <div className="t m0 x0 h2 yc ff1 fs0 fc0 sc0 ls0 ws1">
                4. Thông tin về hợp đồng vận tải
                <span className="ff2"> </span>
              </div>
              <div className="t m0 x0 h3 yd ff3 fs0 fc0 sc0 ls0 ws1">
                (Dành cho đơn vị kinh doanh vận tải)
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x3 ye w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Tên người thuê vận chuyển: {state && state.tntvc ? state.tntvc : ''}
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 ye w4 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Số hợp đồng: {state && state.shd ? state.shd : ''}
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x3 yf w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Địa chỉ: {state && state.dcntvc ? state.dcntvc : ''}
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 yf w4 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Ngày {state && state.ntn ? new Date(state.ntn).getDate() : '…'} tháng{' '}
                {state && state.ntn ? new Date(state.ntn).getMonth() + 1 : '…'} năm
                {state && state.ntn ? new Date(state.ntn).getFullYear() : '…'}
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x3 y10 w3 h4">
              <div className="t m0 x0 h2 y6 ff1 fs0 fc0 sc0 ls0 ws1">
                5. Thông tin về chuyến đi <span className="ff2"> </span>
              </div>
            </div>
            <div className="c x4 y10 w4 h4">
              <div className="t m0 x0 h2 y6 ff1 fs0 fc0 sc0 ls0 ws1">
                6. Thông tin về hàng hóa<span className="ff2"> </span>
              </div>
            </div>
            <div className="c x3 y11 w3 h7">
              <div className="t m0 x0 h3 y12 ff3 fs0 fc0 sc0 ls0 ws1">
                Tuyến vận chuyển: {state && state.tvc ? state.tvc : ''}
                <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h6 y8 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x4 y11 w4 h7">
              <div className="t m0 x0 h6 y12 ff4 fs0 fc0 sc0 ls0 ws1">
                Tên hàng hóa: {state && state.thh ? state.thh : ''}
              </div>
            </div>
            <div className="c x3 y13 w3 h7">
              <div className="t m0 x0 h3 y12 ff3 fs0 fc0 sc0 ls0 ws1">
                Điểm xếp hàng: {state && state.dph ? state.dph : ''}
                <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h6 y8 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x4 y13 w4 h7">
              <div className="t m0 x0 h3 y12 ff3 fs0 fc0 sc0 ls0 ws1">
                Khối lượng hàng hóa:
                <span className="ff4"> {state && state.klhh ? state.klhh : ''}</span>
              </div>
            </div>
            <div className="c x3 y14 w3 h8">
              <div className="t m0 x0 h3 y12 ff3 fs0 fc0 sc0 ls0 ws1">
                Điểm giao hàng:<span className="ff4"> {state && state.dgh ? state.dgh : ''}</span>
              </div>
              <div className="t m0 x0 h6 y8 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x4 y14 w4 h8">
              <div className="t m0 x0 h6 y12 ff4 fs0 fc0 sc0 ls0 ws1">
                Thông tin khác: {state && state.ttk ? state.ttk : ''}
              </div>
            </div>
            <div className="c x3 y15 w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Thời gian vận chuyển dự kiến: {state && state.tgvcdk ? state.tgvcdk : '………'}
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 y15 w4 h4">
              <div className="t m0 x0 h6 y8 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x3 y16 w3 h9">
              <div className="t m0 x0 h3 y17 ff3 fs0 fc0 sc0 ls0 ws1">
                Bắt đầu từ: {state && state.bdt ? state.bdt : '………'} (giờ) <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws0">
                đến {state && state.bdt ? state.bdt : '………'} (giờ)<span className="ff4 ws1"> </span>
              </div>
            </div>
            <div className="c x4 y16 w4 h9">
              <div className="t m0 x0 h6 y17 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x3 y18 w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Tổng số km dự kiến:<span className="ff4"> {state && state.tskm ? state.tskm : ''}</span>
              </div>
            </div>
            <div className="c x4 y18 w4 h4">
              <div className="t m0 x0 h6 y8 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x3 y19 w3 h4">
              <div className="t m0 x0 h2 y6 ff1 fs0 fc0 sc0 ls0 ws1">
                7. Thông tin về rơ moóc, sơ mi rơ moóc
                <span className="ff2"> </span>
              </div>
            </div>
            <div className="c x4 y19 w4 h4">
              <div className="t m0 x0 h6 y6 ff2 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x3 y1a w3 h4">
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Biển số rơ moóc, sơ mi rơ moóc:
                <span className="ff4"> {state && state.bsrm ? state.bsrm : ''}</span>
              </div>
            </div>
            <div className="c x4 y1a w4 h4">
              <div className="t m0 x0 h6 y8 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x3 y1b w5 h4">
              <div className="t m0 x0 h2 y6 ff1 fs0 fc0 sc0 ls0 ws1">
                8. Phần dành cho người xếp, dỡ hàng hóa lên, xuống xe ghi
                <span className="ff2"> </span>
              </div>
            </div>
            <div className="c x3 y1c w3 ha">
              <div className="t m0 x0 h2 y1d ff1 fs0 fc0 sc0 ls0 ws1">
                Thông tin về xếp hàng lên xe
                <span className="ff2"> </span>
              </div>
              <div className="t m0 x0 h3 y1e ff4 fs0 fc0 sc0 ls0 ws1">
                -<span className="ff3">Xếp lần 1: Địa điểm: {state && state.ddxl1 ? state.ddxl1 : '………………………'}</span>
              </div>
              <div className="t m0 x0 h3 y1f ff3 fs0 fc0 sc0 ls0 ws1">
                Khối lượng hàng: {state && state.klhl1 ? state.klhl1 : '…………'} thời gian:{' '}
                {state && state.tgl1 ? state.tgl1 : '…'}
                <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h3 y20 ff3 fs0 fc0 sc0 ls0 ws1">
                Xác nhận của người xếp hàng: {state && state.xncnxh ? state.xncnxh : '……………'}
                <span className="ff4"></span>
              </div>
              <div className="t m0 x0 h6 y21 ff4 fs0 fc0 sc0 ls0 ws1"></div>
              <div className="t m0 x0 h3 y22 ff4 fs0 fc0 sc0 ls0 ws1">
                -<span className="ff3">Xếp lần 2: Địa điểm: {state && state.ddxl2 ? state.ddxl2 : '………………………'}</span>
              </div>
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Khối lượng hàng: {state && state.klhl2 ? state.klhl2 : '…………'} thời gian:{' '}
                {state && state.tgl2 ? state.tgl2 : '…'}
                <span className="ff4"> </span>
              </div>
            </div>
            <div className="c x4 y1c w4 ha">
              <div className="t m0 x0 h2 y1d ff1 fs0 fc0 sc0 ls0 ws1">
                Thông tin về dỡ hàng xuống xe
                <span className="ff2"> </span>
              </div>
              <div className="t m0 x0 h3 y1e ff4 fs0 fc0 sc0 ls0 ws1">
                -<span className="ff3">Dỡ lần 1: Địa điểm: {state && state.dddhl1 ? state.dddhl1 : '………………………'}</span>
              </div>
              <div className="t m0 x0 h3 y1f ff3 fs0 fc0 sc0 ls0 ws1">
                Khối lượng hàng: {state && state.kldhl1 ? state.kldhl1 : '…………'} thời gian:{' '}
                {state && state.tgdhl1 ? state.tgdhl1 : '…'}
                <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h3 y20 ff3 fs0 fc0 sc0 ls0 ws1">
                Xác nhận của người dỡ hàng: {state && state.xncndh ? state.xncndh : '……………'}
                <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h6 y21 ff4 fs0 fc0 sc0 ls0 ws1"></div>
              <div className="t m0 x0 h3 y22 ff4 fs0 fc0 sc0 ls0 ws1">
                -<span className="ff3">Dỡ lần 2: Địa điểm: {state && state.dddhl2 ? state.dddhl2 : '………………………'}</span>
              </div>
              <div className="t m0 x0 h3 y8 ff3 fs0 fc0 sc0 ls0 ws1">
                Khối lượng hàng: {state && state.kldhl2 ? state.kldhl2 : '…………'} thời gian:{' '}
                {state && state.tgdhl12 ? state.tgdhl2 : '…'}
                <span className="ff4"> </span>
              </div>
            </div>
          </div>
          <div className="pi" data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'></div>
        </div>
        <div id="pf2" className="pf w0 h0" data-page-no="2">
          <div className="pc pc2 w0 h0">
            <img
              className="bi x0 y0 w1 h1"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABMkAAAYxCAIAAAAsbFyeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAe6ElEQVR42uzawQnAIBREwWyw/5Y3RQgaZaaEPXx5YNo+AAAAMOE1AQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAACAtjQBAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALYZJjhLEiMAABynrRHQljhMAIskceWAK4+bEbieP7EAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAsMMwwXGSGAFw5QCAf73gba0AAADADH9iAQAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAACAr/06pgEAgGEYpvAnPRD7KhtCvuAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAA4C0BAADwlgAAAHhLAAAAvCUAAAB4SwAAALwlAAAA3hIAAABvCQAAAN4SAAAAbwkAAIC3BAAAwFsCAACAtwQAAMBbAgAA4C0BAADwlgAAAOAtAQAA8JYAAAB4SwAAALwlAAAAeEsAAAC8JQAAAN4SAAAAbwkAAADeEgAAAG8JAACAtwQAAMBbAgAAgLcEAADAWwIAAOAtAQAA8JYAAADgLQEAAPCWAAAAeEsAAAC8JQAAAHhLAAAAvCUAAADeEgAAAG8JAAAA3hIAAABvCQAAgLcEAADAWwIAAIC3BAAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAA3hIAAAC8JQAAAN4SAAAAbwkAAIC3BAAAAG8JAACAtwQAAMBbAgAA4C0BAADAWwIAAOAtAQAA8JYAAAB4SwAAAPCWAAAAeEsAAAC8JQAAAN4SAAAAvCUAAADeEgAAAG8JAACAtwQAAABvCQAAgLcEAADAWwIAAOAtAQAAwFsCAADgLQEAAPCWAAAAeEsAAADwlgAAAHhLAAAAvCUAAADeEgAAALwlAAAA3hIAAABvCQAAgLcEAAAAbwkAAIC3BAAAwFsCAADgLQEAAMBbAgAA4C0BAADwlgAAAHhLAAAA8JYAAAB4SwAAALwlAAAAAyoRAAAA+DojnRtoVywWQQAAAABJRU5ErkJggg=="
            />
            <div className="c x3 y5 w3 hb">
              <div className="t m0 x0 h3 y23 ff3 fs0 fc0 sc0 ls0 ws1">
                Xác nhận của người xếp hàng: {state && state.xncnxh ? state.xncnxh : '……………'}
                <span className="ff4"></span>
              </div>
            </div>
            <div className="c x4 y5 w4 hb">
              <div className="t m0 x0 h3 y23 ff3 fs0 fc0 sc0 ls0 ws1">
                Xác nhận của người dỡ hàng: {state && state.xncndh ? state.xncndh : '……………'}
                <span className="ff4"> </span>
              </div>
              <div className="t m0 x0 h6 y24 ff4 fs0 fc0 sc0 ls0 ws1"></div>
              <div className="t m0 x0 h6 y12 ff4 fs0 fc0 sc0 ls0 ws1"></div>
              <div className="t m0 x0 h6 y6 ff2 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x0 y1 w2 h0">
              <div className="t m0 x3 h6 y25 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x3 y26 w6 hc">
              <div className="t m0 x5 h6 y27 ff4 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x6 y26 w7 hc">
              <div className="t m0 x7 hd y28 ff5 fs0 fc0 sc0 ls0 ws1">
                ……………, ngày {new Date().getDate()} tháng {new Date().getMonth() + 1} năm {new Date().getFullYear()}
                <span className="ff6"> </span>
              </div>
              <div className="t m0 x8 h2 y29 ff1 fs0 fc0 sc0 ls0 ws1">
                Đơn vị vận tải<span className="ff2"> </span>
              </div>
              <div className="t m0 x9 hd y2a ff5 fs0 fc0 sc0 ls0 ws1">
                (ký tên, đóng dấu (nếu có))<span className="_ _1"></span>
                <span className="ff6"> </span>
              </div>
              <div className="t m0 xa h6 y6 ff2 fs0 fc0 sc0 ls0 ws1"></div>
            </div>
            <div className="c x0 y1 w2 h0 ">
              <div className="t m0 x3 hd y2b ff5 fs0 fc0 sc0 ls0 ws1">
                Ghi chú: Tùy theo yêu cầu quản lý, Đơn vị vậ n tải có thể bổ sung các thông tin
                <span className="ff6">khác ngoài các thông tin</span>
              </div>
              <div className="t m0 x3 hd y2c ff5 fs0 fc0 sc0 ls0 ws1">
                đã nêu trên.<span className="ff6"> </span>
              </div>
              <div className="t m0 x3 he y2d ff7 fs1 fc0 sc0 ls0 ws1"></div>
            </div>
          </div>
          <div className="pi" data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'></div>
        </div>
      </div>
    </Fragment>
  );
}

export default Preview;

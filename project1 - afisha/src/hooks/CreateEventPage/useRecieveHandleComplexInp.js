export default function useRecieveHandleComplexInp(data, setData) {

  const changeCompInp = (e, countPG, countRow, idPlace, id) => {

    const { EVENT_TABLE, EVENT_SPEAKERS, EVENT_MODERATORS } = data

    const table = { ...EVENT_TABLE }
    const speakers = { ...EVENT_SPEAKERS }
    const moderators = { ...EVENT_MODERATORS }
    let obj = { SPEAKERS: speakers, MODERATORS: moderators, TABLE: table }
    let count = countPG - 1

    table[idPlace] ??= [];
    table[idPlace][count] ??= {};

    speakers[idPlace] ??= [];
    speakers[idPlace][count] ??= [];

    moderators[idPlace] ??= [];
    moderators[idPlace][count] ??= [];

    if (e === "del") {
      if (countRow === null) {
        if (countPG === table[idPlace].length) {
          table[idPlace].pop();
          speakers[idPlace].pop();
          moderators[idPlace].pop();
        }
      } else {

        if (countRow === obj[id][idPlace][count].length) {
          obj[id][idPlace][count].pop();
          table[idPlace][count][id].pop();
        }

      }
    } else {
      if (e.target.id === "SPEAKERS") speakers[idPlace][count][countRow] = e.target.value.trim()
      else if (e.target.id === "MODERATORS") moderators[idPlace][count][countRow] = e.target.value.trim()

      table[idPlace][count][e.target.id] ??= []
      if (countRow !== null) table[idPlace][count][e.target.id][countRow] = e.target.value.trim()
      else table[idPlace][count][e.target.id] = e.target.value.trim()

    }

    setData(prevState => {
      return {
        ...prevState,
        EVENT_TABLE: table,
        EVENT_SPEAKERS: speakers,
        EVENT_MODERATORS: moderators,
      }
    });

  }

  return changeCompInp;
}

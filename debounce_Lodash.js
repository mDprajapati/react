import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
function MyComponent() {
  const [userQuery, setUserQuery] = useState("");

  const updateQuery = () => {
    // A search query api call.
    // sendQuery(userQuery)
    console.log(userQuery);
  };

  const delayedQuery = useCallback(debounce(updateQuery, 750), [userQuery]);

  const onChange = (e) => {
    setUserQuery(e.target.value);
  };

  useEffect(() => {
    delayedQuery();

    // Cancel the debounce on useEffect cleanup.
    return delayedQuery.cancel;
  }, [userQuery, delayedQuery]);

  return <input onChange={onChange} value={userQuery} />;
}
export default MyComponent;

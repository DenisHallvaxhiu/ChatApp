import React from "react";
import "./Menu.css";

export default function Menu(props) {
  const messages = props.users

  return (
    <>
      <div className="profile">
        <img src="data:image/png;base64,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"></img>
        <div>
          <h2>Denis Hallvaxhiu</h2>
          <h4>Available</h4>
        </div>
      </div>
      <div className="icons">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABS0lEQVR4nO2aMUrFQBRFH4IgiIrr0MYliAqCcRc2YmWtKOLnr0YXIBot3IOF4AbkN/5vpeCR4FQxk4wK5s7nnT7kHu68gczEzHGcPwNsA9fAiH55BW6B4jcSp2gy+InEJtoUpg4wD6wBx8BzRKS0nAAWgcsGkXHbQ7vAXRgsmcEGZppkYhJDhAcbWKovs1gTyhQh50mXSLWclClDzmoDaBWZoM045FzoEpHHGrK6SJ+YNyKGeSNimDcihnkjYpg3IoZ5I2KYN6LfyGhavkeupkVkK3eRD+Dom0SGIhuNEpmcorxEw9dEquNJZcpUkQJtdpJEgswATc6TJWrNlAIzMwk50ptIFFxOePm+qQOsdkg8AbOmDnDQIvEOrJs6wBzw0CJyaJlcSl5EBN6APcsB4D4icQOsWC7w9cdDdTH5GG61zqrB7zuX49j/8AncfchnjhZH+wAAAABJRU5ErkJggg==" />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/klEQVR4nO3WMUoDQRSA4YUUBrEwQgqt9RApvYIeQbAQe0Fb8Rh23kDESrARG60UmwQPEAUFCWnCJwvbZnZH36JFfphq3+wHw7JMUSz6j2EFJ3jEV7UecFw+awvdwsj8htiMRpfxor5ndCPhQ807iIRvM+CbSPg9A36LhKcZ8DQSfs2AR5HwVQZ8GQnvZ8B7kfAaPhugH+iFwWXVr7KuoyI6dHGfQO+wFA6XYSMBrxdtZk6ton8GYzdx1DvRWAfbuMAsAc+qmXK28xtwgHOM5Teu9g5ywD6uxVW+q1+H9mquNz9tiNUUfKa9TlNweWdqq6cUPGkRnjT8zBYVoX0Du0fqoMphKOYAAAAASUVORK5CYII=" />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADSklEQVR4nO2ZX2iOURzHz4yZWMtEiAvkgixi+RfFBYq0IoWYlpJcmFH+LJEwf3KjKIkUTY2b4UL+t6yQXSgXtighUUpbbGzNPjres3p7Ped5n//P876dTz29F8/v/M77+z2d3/n+zhHCYDAYDAaDwWAwGBIEMBxYA+wH6oEaYAFQIPIZoBQ4A3RjzXtgQ14mApgCtOOMG0CxyBeAscBn3NEgkgIwCFgL3AQ+AD3AV6AF2AOMzDL+Ht6oji5KDcA04GWWP/oN2KQZv9Rm3A/gDdCnef8RGCriglRl/u7iix208HFVY3saGKJsJgLPNXar4gp+PPAFd/QD6zL8yKWSyX2L+SYAPy1sz0Ya+ADANbwhl0OJ8lGssdksLADuWNjeFlEDTLJZl06oVX5Ga94v08x70cL2SRwJqMEfzcpPoSaRuzXzWtWBxjgS0OAzAb8G1BzwWlPdSzLmXO60sEaRgEf4p0z5OqF5LxNTCZTLJQN0aexmxZGAuwEkYETabqLT/tl4GHnwEuCyz+A7RBrAYY/LKPqvLwGqfCagSfwvpZtcjJeFs0rEBVCmZKpX1lv4HAycU2LJDqk8K+OJPA3gmMfgZXErtPE7V7W7mUVPNlmngFEiCZBSca0ug+92um5lkwNMlvbAuEQegpCq4K8cBi+XzEqRbwAlsiEBem2CbwZmODgUqQYuAc9Uk9SlaoJc9+/U9ntSiaIikSRItay1SiU+VlVdipz5NmMKgNWy+/PQW3QC54GpIhcBKmx6fDf0qd2jNM5gioCZstcHtgH71K+UsgsHZG+a/d4sS8YLn4A5UQY9Btil+oJeB1/pBXBcrfGwkLvMiigq/wUlRcNAdoLXgQPAVmAjsFMl74GDeeVuUxFW8DtU8QkDKX4WZ9vvgWHyxAhos/HVHui9ASlRcoXw2O7hP8nDlDrgj8ZnXVDBD1JfJ0zkpcg8pfzcPkc1Ptvi1vxx0xNE8OUhbFdR8TaIBDSSuxwKIgGd5CZP5W4RRAJ+k1t0qCs1/8FL5KVDxAHIq69FUtJ6eKYH3iECS3zeALnliEgawBYfx9ZO6VetbfJOfdLuAuvVgURr2tOi9LnX55Y64Jj9byKDwWAwGAwGg8FgMBhE2PwFv45wo+9p2tQAAAAASUVORK5CYII=" />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQUlEQVR4nO3ZMS5EYRiF4dFoTCERKxANsQJRYQWimqiUopqoRCOqiU50qolObAClWIDQiQWIREOh8YpEwQlTmOPc5nv6N/d8zd/cVquUUkopwwPafPeSaO2AaRlzl2jtgAUZc5lo7YBVGXOSaO2ATRlzkGjtgD0Zs51o7YAjGbOeaP8MeKZZY44jxhs+4mnoIz4PmWn4kFvXIUsNH3JuOWTAgZPywYdEawfMyZjrRGsHLMuYs0RrB6zJmH6itQO2ZEwv0doB+zKmm2jtgGMZ00m0dsCFjFlMtHbAjYyZTbR2wKOMmUi0VsAo8PZlyCsw8t/tn/3w3qf1XYfoe5/Wcx2i731a13WIvvdpHcshAw7ckQ/uJlo74FDGbCRaO+BUxqwkWjvgSsbMJ1o74F7GTCVau49fADKmnWhLKaWU0vrdOxWyptzPewdMAAAAAElFTkSuQmCC" />
      </div>
      <div className="input">
        <input type="text" name="" id="" placeholder="Start new conversation" />
        <button>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO1ZvW4TQRBeQaCgJFDx8xIRUVK5Q5F20MwVJxD0vAIojbuEPkROxBsY3YzkAA0FzwCCB4CkIj91jgY0Z8cSVpD3btd3e+g+aSVLJ9vfNzuz+82cMR06dPBGOkyvAtO6FdwEwcwyfQOmMxD8VSymM8v0tXgmuPkoS9b6/f4V0zRQ8B4wvQKmIxD6XW7hoRXc3siSu7UT3ximt0Fo3wrm5Yn/vaxgbgUHMIJbtZAHwacgeOpL/BIhJzZLniyM+Mr+82uW6U1o4jArhGlP/ysoeRjBDSv4YdHk4WIxvdf/DBf5OsnLVMTHdJhe9xZQR9rAv+ti4Ec+S541RR6mCx9XIk9My5bpOAIBp5WOWD3nmydP41Ri2i1FXm9H30tqFp61kMMI7rtHX+2BZ9RCCoCxiG0n8mqy1KfEJgCYjtQ0ukR/PUTeBhcgRS2szhUwtsRxCgCmly47wBELeDt/B4rGI1oBX+bvQAmrHArgXgPHLjWQxyoAmM7/fwHQ+hTithcxt/0YlXgvMiv4Yq4AHTrFKgCy5IGTmbNMP2ITYJm+O0/z1LrGJgAEt0xbGxpgOrcH9o6zgMkuDILkbZCFO6YsHg7TmzE09VbwpPLcVGeVjQvgJK1EfiqCaa/B6L82vtA+1DJJA3n/rvept2RCQAetxcC1vsgfBBvuzgx5B3WkTS9U5C+DzioXczrhT++CLTk33dULxps462/gjh7bpm7o7ai2o4p3Gn8Ht0rfsIvAxACu6txGPbs2HtrZTV7g5cVnps/6TC2xusooXrN26GDajz+jYGvHi7pQwQAAAABJRU5ErkJggg==" />
        </button>
      </div>
      <div className="inbox">
        {messages.map((inbox, index) => (
          <div onClick={()=>{props.selectUser(index)}} className={`inboxItem ${inbox.seen ? "seen" : ""}`} key={index}>
            <img src={inbox.image} alt="" />
            <div className="info">
              <h3>{inbox.name}</h3>
              <p>{inbox.lastMsg}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

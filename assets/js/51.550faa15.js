(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{340:function(s,n,e){"use strict";e.r(n);var a=e(14),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"poll文档解释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#poll文档解释"}},[s._v("#")]),s._v(" poll文档解释")]),s._v(" "),n("h2",{attrs:{id:"目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),n("p",[s._v("[TOC]")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#目录"}},[s._v("目录")])])])]),n("p"),s._v(" "),n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-txt"}},[n("code",[s._v("POLL(2)                           Linux Programmer's Manual                          POLL(2)\n\nNAME\n       poll, ppoll - wait for some event on a file descriptor\n\nSYNOPSIS\n       #include <poll.h>\n\n       int poll(struct pollfd *fds, nfds_t nfds, int timeout);\n\n       #define _GNU_SOURCE         /* See feature_test_macros(7) */\n       #include <signal.h>\n       #include <poll.h>\n\n       int ppoll(struct pollfd *fds, nfds_t nfds,\n               const struct timespec *tmo_p, const sigset_t *sigmask);\n\nDESCRIPTION\n       poll()  performs  a  similar task to select(2): it waits for one of a set of file de‐\n       scriptors to become ready to perform I/O.\n\n       The set of file descriptors to be monitored is specified in the fds  argument,  which\n       is an array of structures of the following form:\n\n           struct pollfd {\n               int   fd;         /* file descriptor */\n               short events;     /* requested events */\n               short revents;    /* returned events */\n           };\n\n       The caller should specify the number of items in the fds array in nfds.\n\n       The field fd contains a file descriptor for an open file.  If this field is negative,\n       then the corresponding events field is ignored and the revents  field  returns  zero.\n       (This  provides  an  easy way of ignoring a file descriptor for a single poll() call:\n       simply negate the fd field.  Note, however, that this technique can't be used to  ig‐\n       nore file descriptor 0.)\n\n       The field events is an input parameter, a bit mask specifying the events the applica‐\n       tion is interested in for the file descriptor fd.  This field  may  be  specified  as\n       zero,  in  which  case  the  only events that can be returned in revents are POLLHUP,\n       POLLERR, and POLLNVAL (see below).\n\n       The field revents is an output parameter, filled by the kernel with the  events  that\n       actually  occurred.   The bits returned in revents can include any of those specified\n       in events, or one of the values POLLERR, POLLHUP, or POLLNVAL.  (These three bits are\n       meaningless  in  the  events field, and will be set in the revents field whenever the\n       corresponding condition is true.)\n\n       If none of the events requested (and no error) has occurred for any of the  file  de‐\n       scriptors, then poll() blocks until one of the events occurs.\n\n       The  timeout  argument  specifies the number of milliseconds that poll() should block\n       waiting for a file descriptor to become ready.  The call will block until either:\n\n       *  a file descriptor becomes ready;\n\n       *  the call is interrupted by a signal handler; or\n\n       *  the timeout expires.\n\n       Note that the timeout interval will be rounded up to the  system  clock  granularity,\n       and  kernel  scheduling delays mean that the blocking interval may overrun by a small\n       amount.  Specifying a negative value in timeout means an infinite timeout.   Specify‐\n       ing  a  timeout of zero causes poll() to return immediately, even if no file descrip‐\n       tors are ready.\n\n       The bits that may be set/returned in events and revents are defined in <poll.h>:\n\n       POLLIN There is data to read.\n\n       POLLPRI\n              There is some exceptional condition on the file descriptor.  Possibilities in‐\n              clude:\n\n              *  There is out-of-band data on a TCP socket (see tcp(7)).\n\n              *  A pseudoterminal master in packet mode has seen a state change on the slave\n                 (see ioctl_tty(2)).\n\n              *  A cgroup.events file has been modified (see cgroups(7)).\n\n       POLLOUT\n              Writing is now possible, though a write larger that the available space  in  a\n              socket or pipe will still block (unless O_NONBLOCK is set).\n\n       POLLRDHUP (since Linux 2.6.17)\n              Stream socket peer closed connection, or shut down writing half of connection.\n              The _GNU_SOURCE feature test macro  must  be  defined  (before  including  any\n              header files) in order to obtain this definition.\n\n       POLLERR\n              Error  condition  (only  returned in revents; ignored in events).  This bit is\n              also set for a file descriptor referring to the write end of a pipe  when  the\n              read end has been closed.\n\n       POLLHUP\n              Hang up (only returned in revents; ignored in events).  Note that when reading\n              from a channel such as a pipe or a stream socket, this event merely  indicates\n              that  the peer closed its end of the channel.  Subsequent reads from the chan‐\n              nel will return 0 (end of file) only after all outstanding data in the channel\n              has been consumed.\n\n       POLLNVAL\n              Invalid request: fd not open (only returned in revents; ignored in events).\n\n       When  compiling  with _XOPEN_SOURCE defined, one also has the following, which convey\n       no further information beyond the bits listed above:\n\n       POLLRDNORM\n              Equivalent to POLLIN.\n\n       POLLRDBAND\n              Priority band data can be read (generally unused on Linux).\n\n       POLLWRNORM\n              Equivalent to POLLOUT.\n\n       POLLWRBAND\n              Priority data may be written.\n\n       Linux also knows about, but does not use POLLMSG.\n\n   ppoll()\n       The relationship between poll() and ppoll() is analogous to the relationship  between\n       select(2)  and  pselect(2):  like pselect(2), ppoll() allows an application to safely\n       wait until either a file descriptor becomes ready or until a signal is caught.\n\n       Other than the difference in the precision of the  timeout  argument,  the  following\n       ppoll() call:\n\n           ready = ppoll(&fds, nfds, tmo_p, &sigmask);\n\n       is nearly equivalent to atomically executing the following calls:\n\n           sigset_t origmask;\n           int timeout;\n\n           timeout = (tmo_p == NULL) ? -1 :\n                     (tmo_p->tv_sec * 1000 + tmo_p->tv_nsec / 1000000);\n           pthread_sigmask(SIG_SETMASK, &sigmask, &origmask);\n           ready = poll(&fds, nfds, timeout);\n           pthread_sigmask(SIG_SETMASK, &origmask, NULL);\n\n       The  above  code segment is described as nearly equivalent because whereas a negative\n       timeout value for poll() is interpreted as an infinite timeout, a negative value  ex‐\n       pressed in *tmo_p results in an error from ppoll().\n\n       See the description of pselect(2) for an explanation of why ppoll() is necessary.\n\n       If  the  sigmask  argument  is specified as NULL, then no signal mask manipulation is\n       performed (and thus ppoll() differs from poll() only in the precision of the  timeout\n       argument).\n\n       The  tmo_p  argument specifies an upper limit on the amount of time that ppoll() will\n       block.  This argument is a pointer to a structure of the following form:\n\n           struct timespec {\n               long    tv_sec;         /* seconds */\n               long    tv_nsec;        /* nanoseconds */\n           };\n\n       If tmo_p is specified as NULL, then ppoll() can block indefinitely.\n\nRETURN VALUE\n       On success, a positive number is returned; this is the  number  of  structures  which\n       have  nonzero revents fields (in other words, those descriptors with events or errors\n       reported).  A value of 0 indicates that the call timed out and  no  file  descriptors\n       were ready.  On error, -1 is returned, and errno is set appropriately.\n\nERRORS\n       EFAULT The array given as argument was not contained in the calling program's address\n              space.\n\n       EINTR  A signal occurred before any requested event; see signal(7).\n\n       EINVAL The nfds value exceeds the RLIMIT_NOFILE value.\n\n       EINVAL (ppoll()) The timeout value expressed in *ip is invalid (negative).\n\n       ENOMEM There was no space to allocate file descriptor tables.\n\nVERSIONS\n       The poll() system call was introduced in Linux 2.1.23.  On older  kernels  that  lack\n       this system call, the glibc (and the old Linux libc) poll() wrapper function provides\n       emulation using select(2).\n\n       The ppoll() system call was added to Linux in kernel  2.6.16.   The  ppoll()  library\n       call was added in glibc 2.4.\n\nCONFORMING TO\n       poll() conforms to POSIX.1-2001 and POSIX.1-2008.  ppoll() is Linux-specific.\n\nNOTES\n       The operation of poll() and ppoll() is not affected by the O_NONBLOCK flag.\n\n       On some other UNIX systems, poll() can fail with the error EAGAIN if the system fails\n       to allocate kernel-internal resources, rather than ENOMEM as Linux does.  POSIX  per‐\n       mits this behavior.  Portable programs may wish to check for EAGAIN and loop, just as\n       with EINTR.\n\n       Some implementations define the nonstandard constant INFTIM with the value -1 for use\n       as a timeout for poll().  This constant is not provided in glibc.\n\n       For a discussion of what may happen if a file descriptor being monitored by poll() is\n       closed in another thread, see select(2).\n\n   C library/kernel differences\n       The Linux ppoll() system call modifies its tmo_p argument.  However, the glibc  wrap‐\n       per  function  hides this behavior by using a local variable for the timeout argument\n       that is passed to the system call.  Thus, the glibc ppoll() function does not  modify\n       its tmo_p argument.\n\n       The  raw ppoll() system call has a fifth argument, size_t sigsetsize, which specifies\n       the size in bytes of the sigmask argument.  The glibc ppoll() wrapper function speci‐\n       fies this argument as a fixed value (equal to sizeof(kernel_sigset_t)).  See sigproc‐\n       mask(2) for a discussion on the differences between the kernel and the libc notion of\n       the sigset.\n\nBUGS\n       See  the discussion of spurious readiness notifications under the BUGS section of se‐\n       lect(2).\n\nSEE ALSO\n       restart_syscall(2), select(2), select_tut(2), epoll(7), time(7)\n\nCOLOPHON\n       This page is part of release 5.05 of the Linux man-pages project.  A  description  of\n       the  project,  information about reporting bugs, and the latest version of this page,\n       can be found at https://www.kernel.org/doc/man-pages/.\n\nLinux                                    2019-08-02                                  POLL(2)\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br"),n("span",{staticClass:"line-number"},[s._v("139")]),n("br"),n("span",{staticClass:"line-number"},[s._v("140")]),n("br"),n("span",{staticClass:"line-number"},[s._v("141")]),n("br"),n("span",{staticClass:"line-number"},[s._v("142")]),n("br"),n("span",{staticClass:"line-number"},[s._v("143")]),n("br"),n("span",{staticClass:"line-number"},[s._v("144")]),n("br"),n("span",{staticClass:"line-number"},[s._v("145")]),n("br"),n("span",{staticClass:"line-number"},[s._v("146")]),n("br"),n("span",{staticClass:"line-number"},[s._v("147")]),n("br"),n("span",{staticClass:"line-number"},[s._v("148")]),n("br"),n("span",{staticClass:"line-number"},[s._v("149")]),n("br"),n("span",{staticClass:"line-number"},[s._v("150")]),n("br"),n("span",{staticClass:"line-number"},[s._v("151")]),n("br"),n("span",{staticClass:"line-number"},[s._v("152")]),n("br"),n("span",{staticClass:"line-number"},[s._v("153")]),n("br"),n("span",{staticClass:"line-number"},[s._v("154")]),n("br"),n("span",{staticClass:"line-number"},[s._v("155")]),n("br"),n("span",{staticClass:"line-number"},[s._v("156")]),n("br"),n("span",{staticClass:"line-number"},[s._v("157")]),n("br"),n("span",{staticClass:"line-number"},[s._v("158")]),n("br"),n("span",{staticClass:"line-number"},[s._v("159")]),n("br"),n("span",{staticClass:"line-number"},[s._v("160")]),n("br"),n("span",{staticClass:"line-number"},[s._v("161")]),n("br"),n("span",{staticClass:"line-number"},[s._v("162")]),n("br"),n("span",{staticClass:"line-number"},[s._v("163")]),n("br"),n("span",{staticClass:"line-number"},[s._v("164")]),n("br"),n("span",{staticClass:"line-number"},[s._v("165")]),n("br"),n("span",{staticClass:"line-number"},[s._v("166")]),n("br"),n("span",{staticClass:"line-number"},[s._v("167")]),n("br"),n("span",{staticClass:"line-number"},[s._v("168")]),n("br"),n("span",{staticClass:"line-number"},[s._v("169")]),n("br"),n("span",{staticClass:"line-number"},[s._v("170")]),n("br"),n("span",{staticClass:"line-number"},[s._v("171")]),n("br"),n("span",{staticClass:"line-number"},[s._v("172")]),n("br"),n("span",{staticClass:"line-number"},[s._v("173")]),n("br"),n("span",{staticClass:"line-number"},[s._v("174")]),n("br"),n("span",{staticClass:"line-number"},[s._v("175")]),n("br"),n("span",{staticClass:"line-number"},[s._v("176")]),n("br"),n("span",{staticClass:"line-number"},[s._v("177")]),n("br"),n("span",{staticClass:"line-number"},[s._v("178")]),n("br"),n("span",{staticClass:"line-number"},[s._v("179")]),n("br"),n("span",{staticClass:"line-number"},[s._v("180")]),n("br"),n("span",{staticClass:"line-number"},[s._v("181")]),n("br"),n("span",{staticClass:"line-number"},[s._v("182")]),n("br"),n("span",{staticClass:"line-number"},[s._v("183")]),n("br"),n("span",{staticClass:"line-number"},[s._v("184")]),n("br"),n("span",{staticClass:"line-number"},[s._v("185")]),n("br"),n("span",{staticClass:"line-number"},[s._v("186")]),n("br"),n("span",{staticClass:"line-number"},[s._v("187")]),n("br"),n("span",{staticClass:"line-number"},[s._v("188")]),n("br"),n("span",{staticClass:"line-number"},[s._v("189")]),n("br"),n("span",{staticClass:"line-number"},[s._v("190")]),n("br"),n("span",{staticClass:"line-number"},[s._v("191")]),n("br"),n("span",{staticClass:"line-number"},[s._v("192")]),n("br"),n("span",{staticClass:"line-number"},[s._v("193")]),n("br"),n("span",{staticClass:"line-number"},[s._v("194")]),n("br"),n("span",{staticClass:"line-number"},[s._v("195")]),n("br"),n("span",{staticClass:"line-number"},[s._v("196")]),n("br"),n("span",{staticClass:"line-number"},[s._v("197")]),n("br"),n("span",{staticClass:"line-number"},[s._v("198")]),n("br"),n("span",{staticClass:"line-number"},[s._v("199")]),n("br"),n("span",{staticClass:"line-number"},[s._v("200")]),n("br"),n("span",{staticClass:"line-number"},[s._v("201")]),n("br"),n("span",{staticClass:"line-number"},[s._v("202")]),n("br"),n("span",{staticClass:"line-number"},[s._v("203")]),n("br"),n("span",{staticClass:"line-number"},[s._v("204")]),n("br"),n("span",{staticClass:"line-number"},[s._v("205")]),n("br"),n("span",{staticClass:"line-number"},[s._v("206")]),n("br"),n("span",{staticClass:"line-number"},[s._v("207")]),n("br"),n("span",{staticClass:"line-number"},[s._v("208")]),n("br"),n("span",{staticClass:"line-number"},[s._v("209")]),n("br"),n("span",{staticClass:"line-number"},[s._v("210")]),n("br"),n("span",{staticClass:"line-number"},[s._v("211")]),n("br"),n("span",{staticClass:"line-number"},[s._v("212")]),n("br"),n("span",{staticClass:"line-number"},[s._v("213")]),n("br"),n("span",{staticClass:"line-number"},[s._v("214")]),n("br"),n("span",{staticClass:"line-number"},[s._v("215")]),n("br"),n("span",{staticClass:"line-number"},[s._v("216")]),n("br"),n("span",{staticClass:"line-number"},[s._v("217")]),n("br"),n("span",{staticClass:"line-number"},[s._v("218")]),n("br"),n("span",{staticClass:"line-number"},[s._v("219")]),n("br"),n("span",{staticClass:"line-number"},[s._v("220")]),n("br"),n("span",{staticClass:"line-number"},[s._v("221")]),n("br"),n("span",{staticClass:"line-number"},[s._v("222")]),n("br"),n("span",{staticClass:"line-number"},[s._v("223")]),n("br"),n("span",{staticClass:"line-number"},[s._v("224")]),n("br"),n("span",{staticClass:"line-number"},[s._v("225")]),n("br"),n("span",{staticClass:"line-number"},[s._v("226")]),n("br"),n("span",{staticClass:"line-number"},[s._v("227")]),n("br"),n("span",{staticClass:"line-number"},[s._v("228")]),n("br"),n("span",{staticClass:"line-number"},[s._v("229")]),n("br"),n("span",{staticClass:"line-number"},[s._v("230")]),n("br"),n("span",{staticClass:"line-number"},[s._v("231")]),n("br"),n("span",{staticClass:"line-number"},[s._v("232")]),n("br"),n("span",{staticClass:"line-number"},[s._v("233")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);